var blueberries = {
  name: 'Blueberries',
  latin: 'Vaccinium corymbosum',
  onShrub: true,
  energy: 240,
  carbs: 14.49,
  protein: 0.74
};

var grapes = {
  name: 'Grapes',
  latin: 'Vitis vinifera',
  onShrub: false,
  energy: 288,
  carbs: 18.1,
  protein: 0.72
};

var redCurrant = {
  name: 'Red currant',
  latin: 'Ribes rubrum',
  onShrub: true,
  energy: 234,
  carbs: 13.8,
  protein: 1.4
};

var writeBerries = function (berries) {
  document.write('<h1>Berries and Facts</h1>');

  berries.forEach(function (item) {
    var shrub = (item.onShrub) ? 'Yes' : 'No';

    document.write('<h2>' + item.name + '</h2>');
    document.write('<dl>');
    document.write('<dt>Grows on a shrub?</dt><dd>' + shrub + '</dd>');
    document.write('<dt>Energy</dt><dd>' + item.energy + ' kJ</dd>');
    document.write('<dt>Carbohydrates</dt><dd>' + item.carbs + ' g</dd>');
    document.write('<dt>Protein</dt><dd>' + item.protein + ' g</dd>');
    document.write('</dl>');
  });
}

writeBerries([blueberries, grapes, redCurrant]);
