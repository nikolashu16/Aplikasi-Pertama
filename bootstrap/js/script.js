var ujian1= document.getElementById("ujiantertulis1");
var ujian2= document.getElementById("ujiantertulis2");
var ujian3= document.getElementById("ujianpraktek");
var hasil= document.getElementById("hasilujian");

var ujiantertulis1 = 80;
var ujiantertulis2 = 90;
var ujianpraktek = 100;
var hasilujian = (ujiantertulis1 + ujiantertulis2 + ujianpraktek) / 3;

ujian1.innerHTML = ujiantertulis1;
ujian2.innerHTML = ujiantertulis2;
ujian3.innerHTML = ujianpraktek;
hasil.innerHTML =  hasilujian;

var nilaitoefl= document.getElementById("toefl");
var scoretoefl= document.getElementById("toefl1");
var toefl1 = 490;
var toefl = 0;

scoretoefl.innerHTML =toefl1;

if(toefl1 >= 500){
 toefl=100;
}
else if(toefl1 >= 450 && toefl1 < 500 ){
  toefl=80;
}
else if(toefl1 < 450){
  toefl=50;
}
nilaitoefl.innerHTML = toefl;

var nilaibeasiswa= document.getElementById("nilai");

var nilai = (hasilujian + toefl) / 2

var statusbeasiswa= document.getElementById("beasiswa");

if(nilai > 90){
 statusbeasiswa.innerHTML = "SELAMAT Anda Mendapatkan Beasiswa";
}
else if(nilai <=90){
  statusbeasiswa.innerHTML = "Anda Belum Mendapatkan Beasiswa , Jangan Patah Semangat, Tingkatkan Belajarmu";
}
nilaibeasiswa.innerHTML = nilai;