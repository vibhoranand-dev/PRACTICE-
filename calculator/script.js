const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let input="";

buttons.addEventListener("click",function(e){
    const btn =e.target;

    if(btn.classList.contains("clear")){
        handleClear();
    } else if (btn.classList.contains("backspace")){
        handleBackspace();
    } else if (btn.classList.contains("equal")){
        calculate();
    } else if (btn.classList.contains("operator")){
        handleOperator();
    } else if (btn.classList.contains("number")){
        handleNumber();
    }

})


function handleBackspace() {
    input = input.slice(0,-1);
    display.innerText= input ||0;
    
}

function handleClear() {
    input="";
    display.innerText="0"
}


function handleNumber() {
    
}

function handleOperator() {
    
}


function calculate () {
    
}


    


