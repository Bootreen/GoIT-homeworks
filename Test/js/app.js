"use strict";

// Потом стырим отсюда форматирование для вывода таблицы
// (function () {
//   var table = '';
//   function format(number) {return number.length < 3 ? format(' ' + number) : number;}
//   for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= 10; j++) {table = table + format(i*j + '') + ' ';}
//     table = table + '\n'
//   }
//   console.log(table);
// })();

(function init() {

  var sheet = new Map();

  document.getElementById('submit').onclick = function () {
    parse(document.getElementById('stdin').value);
  }

  function parse(input) {
    unparse(input + ' типа обработал )))');
  }

  function process(table) {

  }

  function unparse(output) {
    document.getElementById('stdin').value = output;
  }

})();
