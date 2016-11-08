"use strict";

var spriteSheets = loadImages(["./img/smario-sheet.png", "./img/backgrounds.png", "./img/enemies.png", "./img/bricks.png", "./img/monster-sprite.png"]);

function loadImages(imageLinks) {

  var onLoadError = false;

  var loadedImages = imageLinks.map(function(imageLink) {
    var currentImage = new Image();
    currentImage.src = imageLink;
    currentImage.onerror = function() {
      onLoadError = true;
      throw null;
    }
    console.log(currentImage, onLoadError);
    return currentImage;
  });

  Promise.all(loadedImages).then(function() {
    if (!onLoadError) {
      loadedImages.unshift(true);
      console.log(loadedImages);
      return loadedImages;
    }
  }).catch(function() {
    loadedImages.unshift(false);
    console.log(loadedImages);
    return loadedImages;
  });

};


// Заглушка под спрайты
function sprite (options) {
  var that = {};
  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;
  return that;
}
