let count = 0;

let point = document.getElementsByClassName("points")[0];
let save = document.getElementsByClassName("entry-el")[0];


function increment(){
    count += 1;
    point.innerText = count;
}


function save(){
    save.innerText = count + " ";
    count = 0;
}