/*
ini multi- comment, oke in there it's beginning to learn about javascript, i'm never reading a book 
of programming, and start from now. i wanna learn about it, not just copy paste from the reference
i wanna make myself understanding about programming. more and more. so let's try and error. kay!!
*/

var today= new Date(); // create object tanggal
var hourNow = today.getHours(); // find the current hour
var greeting;


//display the appropriate greeeting based on the current time
if (hourNow > 0){
	greeting = "Pagi";
}
else if (hourNow > 10){
	greeting = "Selamat Siang";
}
else if (hourNow > 16){
	greeting = "Selamat Sore!";
}
else {
	greeting = "selamat Datang";
}

document.write('<h3>' + greeting + '</h3>');