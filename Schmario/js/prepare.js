"use strict";

var paths = ["./img/mario-sheet.png", "./img/backgrounds.png", "./img/enemies.png", "./img/bricks.png"];

function loadImg(path) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.src = path;
    img.onload = function() {resolve(img)};
    img.onerror = reject;
  })
};

Promise.all(paths.map(loadImg))
// .then(init);
// .catch(errorHandler);
.then(r => console.log(r))
.catch(e => console.log("Мы все умрем!!! ", e));

// Заглушка под спрайты
function sprite (options) {
  var that = {};
  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;
  return that;
}
