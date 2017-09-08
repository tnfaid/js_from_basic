var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');//jadi cost disini didapat dari id yang ada html. so dia nanti langsung mengisi div id yang ada disitu
el.textContent = '$' + total;