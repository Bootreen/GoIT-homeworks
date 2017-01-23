"use strict";

// ======== borrowed and adapted from external source
function getCaretPos(input) {
  if (input.selectionStart) return input.selectionStart;
    else if (document.selection) {
      input.focus();
      var rangeStart = document.selection.createRange();
      if (rangeStart == null) return 0;
      var rangeEnd = input.createTextRange(),
      rangeCopy = rangeEnd.duplicate();
      rangeEnd.moveToBookmark(rangeStart.getBookmark());
      rangeCopy.setEndPoint("EndToStart", rangeEnd);
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
    range.moveEnd("character", selection);
    range.moveStart("character", selection);
    range.select();
  }
}

function insertTextAtCaret(input, text) {
  var val = input.value, endIndex, range, doc = input.ownerDocument;
  if (typeof input.selectionStart == "number" && typeof input.selectionEnd == "number") {
    endIndex = input.selectionEnd;
    input.value = val.slice(0, endIndex) + text + val.slice(endIndex);
    input.selectionStart = input.selectionEnd = endIndex + text.length;
  } else if (doc.selection != "undefined" && doc.selection.createRange) {
    input.focus();
    range = doc.selection.createRange();
    range.collapse(false);
    range.text = text;
    range.select();
  }
}

//========================================================================================

// Потом стырим отсюда форматирование для вывода таблицы
//   function format(number) {return number.length < 3 ? format(' ' + number) : number;}


(function init() {

  var sheet = new Map();

  var inoutArea = document.getElementById("stdin"),
      submitButton = document.getElementById("submit");

  submitButton.onclick = () => parse(inoutArea.value);

  // Custom TAB handler for spreadsheet to prevent focus loose by textarea
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

    // unparse(input + ' типа обработал )))');
  }

  function process(table) {

  }

  function unparse(output) {
    inoutArea.value = output;
  }

})();
