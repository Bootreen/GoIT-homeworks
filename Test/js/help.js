const parseFormula = formula => {
  const parsedFormula = formula.match(/\(|\)| |[A-Z]+\d+|\+|-|\*|\/|[-+]*\d+/g);
  return (parsedFormula && parsedFormula.join("").length == formula.length)
    ? formula.match(/[A-Z]+\d+/g) || []
    : null;
};

const evalFormula = (formula, cellNames, cells) =>
  eval(`((${cellNames.join(",")})=>${formula})(${cellNames.map(cellName => cells[cellName]).join(",")})`) + "";

const toPoorManSet = list => {
  const result = {};
  list.forEach(v => result[v] = true);
  return result;
};

const dedupe = list => Object.keys((toPoorManSet(list)));

const isSFormula = v => v && v[0] === "=";

const isSString = v => v && v[0] === "'";

const isInvalidNumber = v => isNaN(parseFloat(v));

const evalSpreadsheet = spreadsheet => {
  const cellNames = Object.keys(spreadsheet);
  const evaluatedCells = {};
  const dependentCells = {};
  const errorCells = {};
  cellNames.forEach(cellName => {
    const cellValue = spreadsheet[cellName];
    if (isSFormula(cellValue)) {
      const formula = cellValue.slice(1);
      const formulaDeps = parseFormula(formula);
      if (formulaDeps) {
        if (formulaDeps.length)
          dependentCells[cellName] = {formula, deps: dedupe(formulaDeps)};
        else
          evaluatedCells[cellName] = evalFormula(formula, [], {});
      } else
        errorCells[cellName] = "#Invalid formula";
    } else if (isSString(cellValue))
      evaluatedCells[cellName] = cellValue.slice(1);
    else if (isInvalidNumber(cellValue))
      errorCells[cellName] = "#Invalid number";
    else
      evaluatedCells[cellName] = cellValue;
  });
  let cellNamesToEval = Object.keys(dependentCells);
  while (cellNamesToEval.length) {
    const justEvaluatedCellNames = [];
    cellNamesToEval.forEach(cellName => {
      const cell = dependentCells[cellName];
      const deps = cell.deps;
      if (!dependentCells[cellName].deps.every(depCellName => evaluatedCells[depCellName] || dependentCells[depCellName] || errorCells[depCellName])) {
        errorCells[cellName] = "#Reference to empty cell";
        delete dependentCells[cellName];
      } else if (deps.some(depCellName => errorCells[depCellName])) {
        errorCells[cellName] = "#Reference to erroneous cell";
        delete dependentCells[cellName];
      } else if (deps.every(depCellName => evaluatedCells[depCellName])) {
        if (deps.some(depCellName => isInvalidNumber(evaluatedCells[depCellName]))) {
          errorCells[cellName] = "#Reference to invalid value";
        } else {
          evaluatedCells[cellName] = evalFormula(cell.formula, cell.deps, evaluatedCells);
          justEvaluatedCellNames.push(cellName);
        }
        delete dependentCells[cellName];
      }
    });
    if (!justEvaluatedCellNames.length)
      cellNamesToEval.forEach(cellName => errorCells[cellName] = "#Circular dependency");
    cellNamesToEval = Object.keys(dependentCells);
  }
  return {...evaluatedCells, ...errorCells}
}
