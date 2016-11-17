"use strict";

// Небольшая реструктуризация, оформляем по-человечески,
// избавляемся от глобальных переменных.
// Остальные комменты потом.

var gameApp = function() { // Переменные, константы, прочие данные
  this.canvas = document.getElementById('canvas');
  this.gameField = this.canvas.getContext('2d');

  this.paths = ["./img/background.jpg", "./img/mario.png", "./img/bricks.png", "./img/coin.png",
                "./img/mushroom.png", "./img/turtle.png", "./img/evil-flower.png", "./img/fire.png",
                "./img/flag.png", "./img/bonuses.png"];
  this.C_WIDTH = 1280;
  this.C_HEIGHT = 720;
};

gameApp.prototype = {

  loadImg: function(path) { // Загрузчик спрайтшитов
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.src = path;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  },

  init: function() {
    this.canvas.width = this.C_WIDTH;
    this.canvas.height = this.C_HEIGHT;

    Promise.all(this.paths.map(this.loadImg))
    // .then(gameLoop)
    // .catch(errorHandler);
    .then(result => console.log(result))
    .catch(error => console.log(error));
  },

}

var schmario = new gameApp();
schmario.init();
