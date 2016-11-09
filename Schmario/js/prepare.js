"use strict";

var spriteSheets = loadImages(["./img/smario-sheet.png", "./img/backgrounds.png", "./img/enemies.png", "./img/bricks.png"]);

// Загрузчик ресурсов на промисах
// loadImages получает массив ссылок на файлы и преобразует его в массив промисов loadTries,
// который передается в Promise.all. Если все промисы выполнились, функция возвращает
// массив объектов Img. Если хотя бы один промис отклонен, возвращает false.
function loadImages(imageLinks) {
  var loadTries = imageLinks.map(function(currentLink) {
    return new Promise(function(resolve, reject) {
      var currentImage = new Image();
      currentImage.src = currentLink;
      currentImage.onload = function() {
        resolve(currentImage);
      };
      currentImage.onerror = function() {
        reject();
      }
    })
  })

  Promise.all(loadTries).then(function(loadedImages) {
    return loadedImages;
  }).catch(function() {
    return false;
  });

}


// Заглушка под спрайты
function sprite (options) {
  var that = {};
  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;
  return that;
}
