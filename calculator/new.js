const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value ="";
}

function calculate(){
    try{
        display.value = eval(display.value); 
    }
    catch(error){
        display.value = "Error";
    }
}
function deleteOneStep() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1); 
}
let lastAnswer = 0; 


function appendToDisplay(value) {
    let display = document.getElementById("display");

    if (value === 'Ans') {
        display.value += lastAnswer; 
    } else {
        display.value += value; 
    }
}


function calculate() {
    let display = document.getElementById("display");
    try {
        lastAnswer = eval(display.value); 
        display.value = lastAnswer; 
    } catch (error) {
        display.value = "Error"; 
    }
}


function clearDisplay() {
    let display = document.getElementById("display");
    display.value = "";
}



