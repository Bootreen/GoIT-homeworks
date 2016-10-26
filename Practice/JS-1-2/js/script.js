var pow = function(powX, powN) {
  var result = 1;
  if (powN !== 0) {
    for (var i = 0, powAbsN = Math.abs(powN); i < powAbsN; i++) {
      result = result*powX;
    }
    if (powN < 0) {
      result = 1/result;
    }
  }
  return result;
};

var x = prompt('Введите основание степени:');
do {
  var n = prompt('Введите степень (только целочисленные значения):');
}
while (n != Math.round(n));

console.log('Результат возведения в степень: ', pow(x, n));

var users = [];
for (var i = 0; i < 5; i++) {
  users[i] = prompt('Заполнение списка авторизованных пользователей. Введите имя ', i, '-го пользователя:');
}
alert('Список пользователей заполнен.');
var currentUser = prompt('Авторизация. Введите имя пользователя:')+'';
for (var i = 0, found = false; i < 5; i++) {
  if (currentUser == users[i]) {
    found = true;
    alert(currentUser + ', вы успешно вошли.');
  }
}
if (!found) {
  alert('Попытка неавторизованного доступа! Оставайтесь на месте, группа захвата СБУ уже выехала.');
}
