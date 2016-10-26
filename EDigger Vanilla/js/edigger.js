var fieldArray = [], // Заготовка под массив тайлов
    // Размер массива
    SIZE_X = 24,
    SIZE_Y = 16,
    // SIZE_X = 2,
    // SIZE_Y = 3,
    // Константы типов тайлов
    ROCK = 0, SAND = 1, SANDwet = 2, SOILdry = 3, SOIL = 4, SOILrich = 5, WATER13 = 6, WATER23 = 7, WATER = 8, VOID = 9,
    // Список типов тайлов для CSS-стилей, индексы соответствуют константам в строке выше
    soils = ["tile-rock", "tile-sand", "tile-sand_wet", "tile-soil_dry", "tile-soil", "tile-soil_rich", "tile-water_1-3", "tile-water_2-3", "tile-water", "tile-void"],

    // Кастомные события тоже объявлены глобально, т.к. запускаются из нескольких различных функций
    onTileChanged = new Event('onTileChanged', {bubbles: true}),
    onTileFall = new Event('onTileFall', {bubbles: true}),

    // Блок флагов
    scannerBusy = false,
    fieldStable = false;

// Динамическая генерация формы
this.createDocument = function() {
  var docHeader = document.createElement('header'),
      docFooter = document.createElement('footer'),
      docMain = document.createElement('main'),
      h1 = document.createElement('h1'),
      menu = document.createElement('menu'),
      gameField = document.createElement('div'),
      footerContainer = document.createElement('div'),
      menuSelector = document.createElement('div'),
      menuExportButton = document.createElement('button'),
      menuLevel1 = document.createElement('button'),
      menuLevel2 = document.createElement('button'),
      menuLevel3 = document.createElement('button'),
      menuGravity = document.createElement('button');

  // Заголовок
  document.body.appendChild(docHeader);
  docHeader.appendChild(h1);
  h1.innerHTML = 'Eco-Digger Prototype';
  h1.className = 'application-title';

  // Основная часть
  document.body.appendChild(docMain);
  docMain.className = 'main-container';
  docMain.appendChild(gameField);
  // Рисуем игровое поле
  gameField.className = 'game-field';
  for (var y = 0; y < SIZE_Y; y++) {
    var fieldRow = document.createElement('div');
    fieldRow.className = 'field-row';
    gameField.appendChild(fieldRow);
    // Создаем пустые строки под элементы
    fieldArray[y] = [];
    for (var x = 0; x < SIZE_X; x++) {
      // Создаем конечные элементы тайлов на экране...
      var fieldElement = document.createElement('div');
      // ...а также в массиве, и по дефолту делаем их пустыми
      fieldArray[y][x] = {soilType: VOID};
      // Назначаем уникальный id каждому элементу
      fieldElement.setAttribute('id', setIndex(x, y));
      fieldRow.appendChild(fieldElement);
    }
  }

  // Рисуем футер с меню
  document.body.appendChild(docFooter);
  docFooter.appendChild(footerContainer);
  footerContainer.className = 'footer-container';
  footerContainer.appendChild(menu);
  menu.className = 'footer-menu';
  menu.appendChild(menuSelector);
  menuSelector.className = 'menu-selector';
  // Создаем 10 пустых элементов-селекторов, которыми будем выбирать кисть для рисования в редакторе
  for (var i = 0; i < 10; i++) {
    var menuSelectorElement = document.createElement('div');
    menuSelector.appendChild(menuSelectorElement);
    menuSelectorElement.className = 'menu-selector-element';
    // Кистям назначаем цифровые id-шники, которые соответствуют индексам типов тайлов в soils
    menuSelectorElement.setAttribute('id', i);
  }
  // Последний элемент делаем активным (красная рамка), остальные прозрачные, их не видно
  // Подложкой под селекторами идет спрайт со всеми тайлами
  document.getElementById(VOID).classList.add('menu-selector-element-active');
  // Кнопки экспорта уровней в JSON в консоль и быстрого считывания уже готовых уровней (из модуля levels.js)
  menu.appendChild(menuExportButton);
  menuExportButton.className = 'menu-button';
  menuExportButton.innerHTML = 'Export to JSON (console)';
  menu.appendChild(menuLevel1);
  menuLevel1.className = 'menu-button';
  menuLevel1.innerHTML = 'Level 1 (void)';
  menu.appendChild(menuLevel2);
  menuLevel2.className = 'menu-button';
  menuLevel2.innerHTML = 'Level 2';
  menu.appendChild(menuLevel3);
  menuLevel3.className = 'menu-button';
  menuLevel3.innerHTML = 'Level 3';
  menu.appendChild(menuGravity);
  menuGravity.className = 'menu-button';
  menuGravity.innerHTML = 'Gravity';

  // Определяем начало рисования по клику на массиве тайлов
  gameField.addEventListener('mousedown', drawBegin);
  // При отпущенной кнопке снимаем обработчики рисования, даже если кнопка отпущена уже за полем с тайлами
  document.addEventListener('mouseup', drawEnd);
  // Обработчик переключения селекторов
  menuSelector.addEventListener('click', selectorClick);
  // Нажатия кнопок
  menuExportButton.addEventListener('click', export2JSON);
  menuLevel1.addEventListener('click', loadLevel1);
  menuLevel2.addEventListener('click', loadLevel2);
  menuLevel3.addEventListener('click', loadLevel3);
  // menuGravity.addEventListener('click', scanField);

  gameField.addEventListener('onTileChanged', redrawTile);
  gameField.addEventListener('onTileFall', gravity);

  // Проставляем css-стили тайлам согласно массиву (первая прорисовка)
  // Вызывается после объявления обработчика redrawTile, т.к. использует его в прорисовке
  redrawField();
  scanField();
}

// Перерисовку вызываем не только на клике, но и на проходе мыши над элементом при зажатой кнопке
function drawBegin() {
  document.getElementsByClassName('game-field')[0].addEventListener('mouseover', setTile);
  document.getElementsByClassName('game-field')[0].addEventListener('click', setTile);
}

// Снимаем обработчики рисований после ухода с тайла
function drawEnd() {
  document.getElementsByClassName('game-field')[0].removeEventListener('mouseover', setTile);
  document.getElementsByClassName('game-field')[0].removeEventListener('mouseclick', setTile);
}

// Конструктор уникальных id по индексам массива
function setIndex(x, y) {
  return ('x' + ((x<10) ? '0' + x : x)) + ('y' + ((y<10) ? '0' + y : y));
}

// И обратная функция — декомпозиция id в числовые индексы
function getX(id) {
  if (id != null) return +(id[1] + id[2]);
}

function getY(id) {
  if (id != null) return +(id[4] + id[5]);
}

function setTile() {
  var target = event.target,            // Определить адресата события
      id = target.getAttribute('id'),   // Вычислить его координаты в массиве по id
      x = getX(id),
      y = getY(id),
      // Выбранная кисть редактора
      selectedBrush = document.getElementsByClassName('menu-selector-element-active')[0];
  // Проверка на пустой id, на случай, если клик в поле не попал по тайлу
  // (практика показала, что такое случается)
  if (id != null) {
    // Обработчик setTile лишь меняет значения в массиве и инициирует перерисовку событием onTileChanged
    // Остальная перерисовка идет в соответствующем обработчике перерисовки тайлов при их изменении
    fieldArray[y][x].soilType = +(selectedBrush.getAttribute('id'));
    // Инициировать кастомное событие onTileChanged
    target.dispatchEvent(onTileChanged);
    fieldStable = false;
    scanField();
  }
}

function redrawTile() {
  var target = event.target,            // Определяем адресата события
      id = target.getAttribute('id'),   // Вычисляем его координаты в массиве по id
      x = getX(id),
      y = getY(id);
  // Сбрасыаем класс и устанавливаем новый согласно значению из массива
  target.className = 'field-element';
  target.classList.add(soils[fieldArray[y][x].soilType]);
}

function gravity() {
  var target = event.target,
      id = target.getAttribute('id'),
      x = getX(id),
      y = getY(id),
      // Определить падающий тайл
      source = document.getElementById(setIndex(x, y-1));
  fieldArray[y][x].soilType = fieldArray[y-1][x].soilType;
  fieldArray[y-1][x].soilType = VOID;
  // Перерисовываем тайлы
  target.dispatchEvent(onTileChanged);
  source.dispatchEvent(onTileChanged);
}

function scanField() {
  // Защита от рекурсивного запуска цикла
  if (scannerBusy) return;
  scannerBusy = true;
  // По умолчанию сканер считает, что поле в равновесии, пока чекеры не доказали обратное
  fieldStable = true;
  // Обратный проход с правого нижнего элемента
  for (var y = SIZE_Y-1; y > -1; y--) {
    for (var x = SIZE_X-1; x > -1; x--) {
      if (gravityCheck(x, y)) {
          document.getElementById(setIndex(x, y)).dispatchEvent(onTileFall);
          fieldStable = false;
      }
    }
  }
  scannerBusy = false;
  // Если поле не пришло в равновесие, делаем еще один проход
  if (fieldStable == false) scanField();
}

function gravityCheck(x, y) {
  // В самую верхнюю строку (y=0) падать нечему, отсекаем сразу
  return (y == 0) ? false :
  // Камни и пустоты не падают
  (fieldArray[y][x].soilType == VOID)&&(fieldArray[y-1][x].soilType != VOID)&&(fieldArray[y-1][x].soilType != ROCK);
}

// Потайловая перерисовка в цикле
function redrawField() {
  for (var y = 0; y < SIZE_Y; y++) {
    for (var x = 0; x < SIZE_X; x++) {
      document.getElementById(setIndex(x, y)).dispatchEvent(onTileChanged);
    }
  }
}

// Выбор кисти для редактора поля
function selectorClick() {
  var target = event.target,
      previous = document.getElementsByClassName('menu-selector-element-active')[0];
  if (target.className != 'menu-selector') {
    // Снимаем статус "активный" с последней выбранной кисти
    previous.classList.remove('menu-selector-element-active');
    // Вешаем на новую кисть
    target.classList.add('menu-selector-element-active');
  }
}

// Экспорт и загрузка уровней
function export2JSON() {
  console.log(JSON.stringify(fieldArray));
}

function loadLevel1() {
  fieldArray = level1;
  redrawField();
  scanField();
}

function loadLevel2() {
  fieldArray = level2;
  redrawField();
  scanField();
}

function loadLevel3() {
  fieldArray = level3;
  redrawField();
  scanField();
}

this.createDocument();
