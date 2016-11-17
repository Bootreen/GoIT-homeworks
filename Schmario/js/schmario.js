"use strict";

// Небольшая реструктуризация, оформляем по-человечески,
// избавляемся от глобальных переменных.
// Остальные комменты потом.

var gameApp = function() { // Переменные, константы, прочие данные
  this.canvas = document.getElementById('canvas');
  this.gameField = this.canvas.getContext('2d');
  this.C_WIDTH = 1280;
  this.C_HEIGHT = 720;

  this.paths = ["./img/background.jpg", "./img/mario.png", "./img/bricks.png", "./img/coin.png",
                "./img/mushroom.png", "./img/turtle.png", "./img/evil-flower.png", "./img/fire.png",
                "./img/flag.png", "./img/bonuses.png"];

  this.background = new Image();
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
    Promise.all(this.paths.map(this.loadImg))
    .then(result => {
      this.paths = result.slice();
      this.start();
    })
    // .catch(errorHandler);
    // .then(result => console.log(result))
    .catch(error => console.log(error));
  },

  start: function() {
    this.canvas.width = this.C_WIDTH;
    this.canvas.height = this.C_HEIGHT;
    this.background = this.paths[0];
    this.avatar = this.paths[1];
    this.gameLoop();
  },

  gameLoop: function (now) {
    schmario.draw(now);
    requestAnimationFrame(schmario.gameLoop);
  },

  draw: function (now) {
    this.drawBackground();
    // this.drawBricks();
    // this.drawEniemies();
    // this.drawBonuses();
    this.drawAvatar();
  },

  drawBackground: function () {
    this.gameField.drawImage(this.background, 0, 0);
  },

  drawAvatar: function () {
    this.gameField.drawImage(this.avatar, 0, 0, 48, 84, 624, 636, 48, 84);
  }

}

var schmario = new gameApp();
schmario.init();
