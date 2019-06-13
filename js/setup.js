'use strict';

// Массивы с данными
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

// Открытие окна с настройками
var openWindow = document.querySelector('.setup');
openWindow.classList.remove('hidden');

// Генерация рандомного числа
var generateNum = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

// Функция создайтя параметров волшебника, здесь создается объект - волшебник
var createWizard = function () {
  return {
    'name': names[generateNum(0, names.length - 1)] + ' ' + surnames[generateNum(0, names.length - 1)],

    'coatColor': coatColors[generateNum(0, coatColors.length - 1)],

    'eyesColor': eyesColors[generateNum(0, eyesColors.length - 1)]
  };
};

// Функция создания массива с волшебниками, здесь генерируются 4 волшебника
var createWizards = function () {
  var arrayWizards = [];
  var coatColor = [i];
  for (var i = 0; i < 4; i++) {
    arrayWizards.push(createWizard(name, coatColor));
  }
  return arrayWizards;
};

// Здесь находим в разметке класс setup-similar-list
var similarListElement = openWindow.querySelector('.setup-similar-list');
// Здесь методом querySelector находим шаблон разметки волшебника и все что находится внутри шаблона
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Функция создания вошебника, каждого со своими параметрами
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Функция размещает созданных волшебников в коде
var fragment = document.createDocumentFragment();
var wizards = createWizards();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// Здесь открываем панель, где будут размещаться аволшебники
openWindow.querySelector('.setup-similar').classList.remove('hidden');
