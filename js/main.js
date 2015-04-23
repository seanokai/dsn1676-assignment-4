var blueberries = {
info: 'Vaccinium corymbosum',
growsOnShrub: 'true',
energy: 240,
carbohydrates: 14.49,
protein: 0.74
};
  
var grapes = {
info: 'Vitis vinifera',
growsOnShrub: 'false',
energy: 288,
carbohydrates: 18.1,
protein: 0.72,
};

var redCurrants = {
info: 'Ribes rubrum',
growsOnShrub: 'true',
energy: 234,
carbohydrates: 13.8,
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