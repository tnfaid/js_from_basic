var name_j, status_j;
name_j = 'Titik Nurfaidah';
status_j = 'Jomblo Bahagia';

var elName = document.getElementById('name');//ini untuk pemanggilan dari id yang ada di html
elName.textContent = name_j; //ini untuk menampilkan kalau id yang dipanggil tadi isinya value dari variable name_j
var elStatus = document.getElementById('status');
elStatus.textContent = status_j;