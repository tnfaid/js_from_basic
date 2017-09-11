var $subtotal, $shipping, $totalSemua;
$subtotal = 7*5*2; //total 70
$shipping = 10*0.5; //total 5
$totalSemua = $subtotal + $shipping;

var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = 'Subtotal : $' + $subtotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = 'Shipping : $' + $shipping;

var elTotalSemua = document.getElementById('grandTotal');
elTotalSemua.textContent = 'Total Semua :  $'+$totalSemua;