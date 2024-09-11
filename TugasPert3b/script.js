let nilaiAngka = document.getElementById("inp");
let out = document.getElementById("output");

document.getElementById("submit").addEventListener("click", function (){
    out.value = 
    (parseInt(nilaiAngka.value) > 80 && parseInt(nilaiAngka.value) <= 100) ? "A" :
    (parseInt(nilaiAngka.value) > 70 && parseInt(nilaiAngka.value) <= 80) ? "B" :
    (parseInt(nilaiAngka.value) > 55 && parseInt(nilaiAngka.value) <= 70) ? "C" : 
    (parseInt(nilaiAngka.value) > 40 && parseInt(nilaiAngka.value) <= 55) ? "D" : "E";

});