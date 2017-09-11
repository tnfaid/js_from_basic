var hotel = {
	nama: 'Quay',
	jumlahRuang : 40,
	terpakai : 15,

	sisaRuang : function (){
		return this.jumlahRuang - this.terpakai;
	}
};

// var elNama = document.getElementById('hotelName');
// elNama.textContent = hotel.nama;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.sisaRuang();

var msg = '<p><b>page title: </b>'+ document.title + '<br />';
msg += 'page addres : ' + document.URL + '<br />';
msg += 'last modified: ' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;