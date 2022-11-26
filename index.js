var counterElement = document.getElementById('counterText');

var incrementBtn = document.getElementById('increment');
var decrementBtn = document.getElementById('decrement');
var clearBtn = document.getElementById('clear');
var alertText = document.getElementById('alertmessage');

var counter = counterElement.innerText;



function decrement() {

    if(counter > 0){
        counter--;
        console.log(counter);
        counterElement.innerText = counter;
    }
    else {
        alertText.innerText = 'Error : cannot go below 0'
    }
    
}

function increment() {
    counter++;
    console.log(counter);
    counterElement.innerText = counter;
}

function clear() {
    counter = 0;
    console.log(counter);
    counterElement.innerText = counter;
}

decrementBtn.onclick = decrement;
incrementBtn.onclick = increment;
clearBtn.onclick = clear;