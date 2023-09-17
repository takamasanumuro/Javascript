//Decrement, reset and increment counter

//Get button
let counter = document.querySelector("#counter");
let buttonDecrement = document.querySelector("#decrement");
let buttonReset = document.querySelector("#reset");
let buttonIncrement = document.querySelector("#increment");

buttonDecrement.addEventListener("click", decrement);
buttonReset.addEventListener("click", reset);
buttonIncrement.addEventListener("click", increment);

function addString(Element, step) {
    let currentValue = Number(Element.innerHTML);
    let newValue = currentValue + step;
    Element.innerHTML = String(newValue);
}

function decrement() {
    console.log("You have clicked the decrement button");
    addString(counter, -1);
}

function reset() {
    console.log("You have clicked the reset button");
    counter.innerHTML = "0";
}

function increment() {
    console.log("You have clicked the increment button");
    addString(counter, 1);    
}