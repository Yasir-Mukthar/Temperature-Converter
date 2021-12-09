var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener("input", function(){

let inputValue= this.value;
let fa = (inputValue * 9/5) + 32;
fah.value=fa.toFixed(2);

})

fah.addEventListener("input", function(){

let inputValue= this.value;
let fa = (inputValue - 32) * 5/9;
cel.value=fa.toFixed(2);


})