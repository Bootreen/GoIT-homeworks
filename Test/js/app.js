'use strict';

(function init() {

  const inoutArea = document.getElementById('stdin'),
        submitButton = document.getElementById('submit');

  submitButton.onclick = () => run();

  // Custom TAB handler for spreadsheet to prevent focus loss by textarea
  inoutArea.onkeydown = () => {
    const onTabDown = true;
    if (event.keyCode == 9) {
      const storedPos = getCaretPos(inoutArea);
      document.onkeyup = () => {
        if (event.keyCode == 9 && onTabDown) {
          inoutArea.focus();
          setCaretToPos(storedPos);
          insertTextAtCaret(inoutArea, '\t');
        }
      }
    }
  }

  // Main conveyer
  function run() {
    inoutArea.value = unparse(calculate(parse(inoutArea.value)));
  }

  function parse(input) {

    if (!input) return '#Error: input area is empty';

    // sheetSize = first entry; rows = all of the further entries
    const [sheetSize, ...rows] = input.split(/\n/g); // Rows split, separator EOL

    // Sheet dimensions parse and evaluation
    const numValid = number => {
      if (number.search(/[^\d]/)==-1 && parseInt(number)!=0)
         return parseInt(number); else return false;
    }
    const [colCount, rowCount] = sheetSize.split(/\t/g).map(s => numValid(s));
    if (!colCount || !rowCount) return '#Error: invalid sheet size format';

    // Indexes to letters converter
    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          ABC_L = ABC.length;
    const columnIdxToLetters = idx => {
      let n = idx + 1;
      let result = '';
      do {
        // Find last index letter (and the only one for indexes <= alphabet length)
        const c = (n - 1) % ABC_L;
        // Store first letter / insert further letters in the start of the index
        result = ABC[c] + result;
        // Source of the next index letter for indexes > alphabet length
        n = Math.floor((n - c) / ABC_L)
      } while (n); // Until all letters calculated
      return result;
    }

    // Parse rest of the sheet
    if (rows.length > rowCount) return '#Error: too many rows';
    const sheet = rows.map(row => row.split(/\t/g)); // Cells split, separator TAB
    const result = {};
    for (let r = 0; r < rowCount; r++) {
      const row = sheet[r];
      // Empty raws and cells are valid
      if (!row && row != '') return '#Error: insufficient rows';
      // Reverse quotes for calculated expression (ES6 template string)
      if (row.length > colCount) return `#Error: too many cells at the sheet line #${r+1}`;
      for (let c = 0; c < colCount; c++) {
        const cell = row[c];
        if (!cell && cell != '') return `#Error: insufficient cells at the sheet line #${r+1}`;
        // Fill result{} with {key: value}
        result[`${columnIdxToLetters(c)}${r+1}`] = cell.trim();
      }
    }
    return result;
  }

  function calculate(input) {
    return input;
  }

  function unparse(input) {
    return input;
  }

})();

function getCaretPos(input) {
  if (input.selectionStart) return input.selectionStart;
    else if (document.selection) {
      input.focus();
      let rangeStart = document.selection.createRange();
      if (rangeStart == null) return 0;
      let rangeEnd = input.createTextRange(),
      rangeCopy = rangeEnd.duplicate();
      rangeEnd.moveToBookmark(rangeStart.getBookmark());
      rangeCopy.setEndPoint('EndToStart', rangeEnd);
      return rangeCopy.input.length;
    }
  return 0;
}

function setCaretToPos(input, selection) {
  if (input.setCaretToPos) {
    input.focus();
    input.setCaretToPos(selection, selection);
  }
  else if (input.createTextRange) {
    let range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selection);
    range.moveStart('character', selection);
    range.select();
  }
}

function insertTextAtCaret(input, text) {
  let val = input.value, endIndex, range, doc = input.ownerDocument;
  if (typeof input.selectionStart == 'number' && typeof input.selectionEnd == 'number') {
    endIndex = input.selectionEnd;
    input.value = val.slice(0, endIndex) + text + val.slice(endIndex);
    input.selectionStart = input.selectionEnd = endIndex + text.length;
  } else if (doc.selection != 'undefined' && doc.selection.createRange) {
    input.focus();
    range = doc.selection.createRange();
    range.collapse(false);
    range.text = text;
    range.select();
  }
}
