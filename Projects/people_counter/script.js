let count = 0;

let point = document.getElementById("points");
let savef = document.getElementById("entry-el");


function increment(){
    count += 1;
    point.innerText = count;
}


function save(){
    savef.textContent += count + " - ";
    count = 0;
}