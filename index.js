let myCounter = document.getElementById("counter");

let myEntry = document.getElementById("entries_el");

let count = 0;

function increment(){
    count += 1;
    myCounter.textContent = count;
}

function save(){
    let mySave = count + " - ";
    myEntry.textContent += mySave;
    myCounter.textContent = 0;
    count = 0;
}

save();