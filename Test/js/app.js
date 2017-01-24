'use strict';

(function init() {

  var sheet = new Map();

  var inoutArea = document.getElementById('stdin'),
      submitButton = document.getElementById('submit');

  submitButton.onclick = () => parse(inoutArea.value);

  // Custom TAB handler for spreadsheet to prevent focus loss by textarea
  inoutArea.onkeydown = () => {
    var onTabDown = true;
    if (event.keyCode == 9) {
      var storedPos = getCaretPos(inoutArea);
      document.onkeyup = () => {
        if (event.keyCode == 9 && onTabDown) {
          inoutArea.focus();
          setCaretToPos(storedPos);
          insertTextAtCaret(inoutArea, '\t');
        }
      }
    }
  }

  function parse(input) {
    const sheetSizeFormat = /\d+\t\d+\n/,
          anySubstring = '[^\\s]+';

    if (input) {
      if (sheetSizeFormat.test(input)) {
        var sheetCols = input.match(/\d+/g)[0];
        var sheetRows = input.match(/\d+/g)[1];
        // Sheet format dynamic regexp
        var reTemplate = '';
        for (var row=1; row < sheetRows; row++) {
          reTemplate = reTemplate + anySubstring;
          for (var col=1; col < sheetCols; col++) {
            reTemplate = reTemplate + '\\t' + anySubstring;
          }
          reTemplate = reTemplate + '\\n';
        }
        reTemplate = reTemplate + anySubstring;
        for (var col=1; col < sheetCols; col++) {
          reTemplate = reTemplate + '\\t' + anySubstring;
        }
        var sheetFormat = new RegExp(reTemplate);

        var sheetPreParsed = input.replace(sheetSizeFormat, '');
        // Declared sheet size validation
        if (sheetPreParsed.match(sheetFormat) == sheetPreParsed.match(sheetFormat).input) {
          sheetPreParsed = sheetPreParsed.split(/\t|\n/g);
          sheet = sheetPreParsed.forEach()
        } else {
          parserReport(2);
        }
      }
      else {
        parserReport(1);
      }
    }
    else parserReport(0);
  }

  function process(table) {

  }

  function unparse(output) {
    inoutArea.value = output;
  }

})();

function parserReport(errCode) {
  var report = document.getElementById('report');
  report.setAttribute('class', 'report-error');
  switch (errCode) {
    case 0:
      report.innerHTML = 'Input area is empty.'
      break;
    case 1:
      report.innerHTML = 'Sheet size syntax error.'
      break;
    case 2:
      report.innerHTML = 'Sheet size doesn\'t match to declared.'
      break;
  }
}

// ======== Some textarea magic
function getCaretPos(input) {
  if (input.selectionStart) return input.selectionStart;
    else if (document.selection) {
      input.focus();
      var rangeStart = document.selection.createRange();
      if (rangeStart == null) return 0;
      var rangeEnd = input.createTextRange(),
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
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selection);
    range.moveStart('character', selection);
    range.select();
  }
}

function insertTextAtCaret(input, text) {
  var val = input.value, endIndex, range, doc = input.ownerDocument;
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
