var colors = new Array('w', 'r', 'g');

var elColor = document.getElementById('colors');
elColor.innerHTML = colors.item(0);

// create array
var colors = ['white', 'black', 'custom'];

// update the third item in the array
colors[2] = 'customJadi';

// get the element with an id of colors
var el = document.getElementById('colors');

// replace with third item from the array
el.textContent = colors[2];