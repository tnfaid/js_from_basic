var hotel = {
	nama: 'Quay',
	jumlahRuang : 40,
	terpakai : 15,

	sisaRuang : function (){
		return this.jumlahRuang - this.terpakai;
	}
};

var elNama = document.getElementById('hotelName');
elNama.textContent = hotel.nama;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.sisaRuang();