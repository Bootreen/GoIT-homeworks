"use strict";

var gameApp = function() { // Переменные, константы, прочие данные

  // Характеристики Canvas
  this.canvas = document.getElementById('canvas'),
  this.gameField = this.canvas.getContext('2d'),
  this.C_WIDTH = 1280,
  this.C_HEIGHT = 720,

  // Размеры и координаты
  this.BRICK_HEIGHT, this.BRICK_WIDTH, this.AVA_WIDTH = 48,
  this.AVA_HEIGHT = 84,
  this.AVA_START_X = 624,
  this.AVA_START_Y = 636,

  // Пути к графике
  this.paths = ["./img/background.jpg", "./img/mario.png", "./img/bricks.png", "./img/coin.png",
                "./img/mushroom.png", "./img/turtle.png", "./img/evil-flower.png", "./img/fire.png",
                "./img/flag.png", "./img/bonuses.png"],

  // Пауза и интевал ее проверки
  this.isPaused = false,
  this.PAUSE_CHECK_INTERVAL = 200;

  // FPS и чекпойнты
  this.fps = 0,
  this.lastAnimationFrameTime = 0,
  this.lastFpsUpdateTime = 0

};

gameApp.prototype = { // Методы

  init: function() {
    // Пакетная загрузка спрайтшитов
    Promise.all(this.paths.map(this.loadImg))
    .then(result => {
      // Перезаписываем пути указателями на закэшированные изображения
      this.paths = result.slice();
      this.start();
    })
    // .catch(error => errorHandler(error));
    .catch(error => console.log(error));
  },

  loadImg: function(path) { // Загрузчик на промисах
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.src = path;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  },

  // Инициализайия параметров, запуск лупа
  start: function() {
    this.canvas.width = this.C_WIDTH;
    this.canvas.height = this.C_HEIGHT;
    this.background = this.paths[0];
    this.avatar = this.paths[1];
    this.gameLoop();
  },

  // Основной луп + автопауза при потере фокуса активным окном
  gameLoop: function (now) {
    if (schmario.isPaused) {
      setTimeout(function () {
        requestAnimationFrame(schmario.gameLoop);
      }, schmario.PAUSE_CHECK_INTERVAL);
    }
    else {
      schmario.fps = schmario.currentFps(now);
      schmario.render(now);
      requestAnimationFrame(schmario.gameLoop);
    }
  },

  // Отрисовка всего
  render: function (now) {
    this.renderBackground();
    // this.drawBricks();
    // this.drawEniemies();
    // this.drawBonuses();
    this.renderAvatar();
  },

  // Задник
  renderBackground: function () {
    this.gameField.drawImage(this.background, 0, 0);
  },

  // Шмарио
  renderAvatar: function () {
    this.gameField.drawImage(this.avatar, 0, 0, this.AVA_WIDTH, this.AVA_HEIGHT,
                             this.AVA_START_X, this.AVA_START_Y, this.AVA_WIDTH, this.AVA_HEIGHT);
  },

  // Расчет FPS, в дальнейшем используется для FPS-независимой анимации
  currentFps: function (now) {
    var fps = 1000 / (now - this.lastAnimationFrameTime);
    this.lastAnimationFrameTime = now;
    this.lastFpsUpdateTime = (now - this.lastFpsUpdateTime > 1000) ? now : this.lastFpsUpdateTime;
    return (this.lastAnimationFrameTime === 0) ? 60 : fps;

    // if (this.lastAnimationFrameTime === 0) {
    //   this.lastAnimationFrameTime = now;
    //   return 60;
    // };
    //
    // if (now - this.lastFpsUpdateTime > 1000) {
    //   this.lastFpsUpdateTime = now;
    // }
    // return fps;
  },

}

window.onblur = function () {
  schmario.isPaused = true;
};

window.onfocus = function () {
  schmario.isPaused = false;
};

var schmario = new gameApp();
schmario.init();
