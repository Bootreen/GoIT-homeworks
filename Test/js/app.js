(function () {
  var table = '';
  function format(number) {return number.length < 3 ? format(' ' + number) : number;}
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {table = table + format(i*j + '') + ' ';}
    table = table + '\n'
  }
  console.log(table);
})();
