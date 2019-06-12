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

// Функция для поиска рандомного цвета
var getRandomColor = function () {
  return 'hsl(225,' + (Math.random() * 100) + '%, 50%)';
};

// Функция для поиска макс. эл-та массива
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  ctx.fillText(times[i], CLOUD_X + COLUMN_SPACING * playerNumber + BAR_WIDTH * i, CLOUD_HEIGHT - GAP);

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, 40);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, 60);

  for (var i = 0; i < names.length; i++) {
    var playerNumber = i + 1;

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + COLUMN_SPACING * playerNumber + BAR_WIDTH * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + COLUMN_SPACING * playerNumber + BAR_WIDTH * i, 85);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor(100);
    }

    ctx.fillRect(CLOUD_X + COLUMN_SPACING * playerNumber + BAR_WIDTH * i, (240 - (BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
