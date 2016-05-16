this.createForm = function() {
  var testForm = document.createElement('form');
  var h3C = document.createElement('h3');
  var ol = document.createElement('ol');
  var button = document.createElement('button');
  h3C.className = 'centered-header';
  h3C.innerHTML = 'Тест по программированию';
  testForm.className = 'pure-form test-form';
  testForm.setAttribute('action', 'index.html');
  testForm.setAttribute('method', 'post');
  testForm.appendChild(h3C);
  testForm.appendChild(ol);
  for (var i = 0; i < 3; i++) {
    var h3 = document.createElement('h3');
    var li = document.createElement('li');
    var ul = document.createElement('ul');
    h3.innerHTML = (i+1)+'. Вопрос №'+(i+1);
    ol.appendChild(li);
    li.appendChild(h3);
    li.appendChild(ul);
    for (var j = 0; j < 3; j++) {
      var liS = document.createElement('li');
      var input = document.createElement('input');
      var label = document.createElement('label');
      liS.className = "spaced-li";
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', 'q'+(i+1)+'-a'+(j+1));
      label.setAttribute('for', 'q'+(i+1)+'-a'+(j+1));
      label.innerHTML = ' Вариант ответа №'+(j+1);
      ul.appendChild(liS);
      liS.appendChild(input);
      liS.appendChild(label);
    }
  }
  testForm.appendChild(button);
  button.className = 'pure-button pure-button-primary centered-button';
  button.setAttribute('type', 'submit');
  button.innerHTML = 'Проверить мои результаты';
  document.body.appendChild(testForm);
};

this.createForm();
console.log(document.body); //Отладка
