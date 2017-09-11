var siswa = new Object();

siswa.nama = 'ObjectMans';
siswa.jumlah = 12;
siswa.pindah = 3;
siswa.masihAda = function(){
	return this.jumlah - this.pindah;
};

var elNama = document.getElementById('nama');
elNama.textContent = siswa.nama;

var elAvailable = document.getElementById('ada');
elAvailable.textContent = siswa.masihAda();