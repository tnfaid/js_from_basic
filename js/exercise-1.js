var $custom, $total, $subtotal, $shipping, $grandTotal, $name, $message;
$name = 'Howdy Molly';
$message = 'please check your order:';
$custom = 'Montage House';
$total = 14;
$subtotal = 70;
$shipping = $subtotal / 10;
$grandTotal = $subtotal + $shipping;

var elName = document.getElementById('intro');
elName.textContent = $name + ', ' + $message;

var elCustom = document.getElementById('custom');
elCustom.textContent = 'Custom sign : ' + $custom;

var elTotal = document.getElementById('total');
elTotal.textContent = 'Total tiles: $ '+ $total;

var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = 'SubTotal: $ '+ $subtotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = 'Shipping: $ ' + $shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = 'GrandTotal: $ ' + $grandTotal;