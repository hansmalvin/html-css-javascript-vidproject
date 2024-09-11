let inputX = document.getElementById('varA');
let inputY = document.getElementById('varB');
let out = document.getElementById('output');

document.getElementById("tambah").addEventListener("click", function (){
    out.value = parseInt(inputX.value)+parseInt(inputY.value);
});
document.getElementById("kurang").addEventListener("click", function (){
    out.value = parseInt(inputX.value)-parseInt(inputY.value);
});
document.getElementById("kali").addEventListener("click", function (){
    out.value = parseInt(inputX.value)*parseInt(inputY.value);
});
document.getElementById("bagi").addEventListener("click", cobaBagi);

function cobaBagi(){
    out.value = parseInt(inputX.value)/parseInt(inputY.value);
}
//gunakan jenis fungsi yang berbeda beda untuk tujuan pembelajaran