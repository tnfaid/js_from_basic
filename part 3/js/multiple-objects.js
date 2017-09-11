function hotel (name, jumlah, pesan){
	this.name = name;
	this.jumlah = jumlah;
	this.pesan = pesan;
	this.cekStok = function (){
		return this.jumlah - this.pesan;
	};
}

var hotelAngsa = new hotel('Angsa', 100, 50);
var hotelBuaya = new hotel('Buaya', 40, 10);

var keterangan1 = hotelAngsa.name + ' banyak ruang : ';
	keterangan1 += hotelAngsa.cekStok();
var elHotel1 = document.getElementById('hotel1');
	elHotel1.textContent = keterangan1;

var keterangan2 = hotelBuaya.name + ' banyak ruang : ';
	keterangan2 += hotelBuaya.cekStok();
var elHotel2 = document.getElementById('hotel2');
	elHotel2.textContent = keterangan2;