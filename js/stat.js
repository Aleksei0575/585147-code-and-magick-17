'use strict';

// Параметры облака
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

// Начальные координаты облака и тени
var CLOUD_X = 100;
var CLOUD_Y = 10;

// Внутренние параметры
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var COLUMN_SPACING = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, 40);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, 60);

  for (var i = 0; i < names.length; i++) {
    var playerNumber = i + 1;
    ctx.fillText(names[i], CLOUD_X + COLUMN_SPACING * playerNumber + BAR_WIDTH * i, CLOUD_HEIGHT - GAP);
    if (names[i] !== 'Вы') {
      ctx.fillStyle = 'hsl(225, 90%, 50%)';
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(CLOUD_X + COLUMN_SPACING * playerNumber + BAR_WIDTH * i, 240 - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
  }
};
