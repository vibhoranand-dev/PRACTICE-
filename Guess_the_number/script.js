// GENERATION OF RANDOM NUMBER 
const myNum = Math.floor(Math.random()*100 +1)
console.log(myNum)


let attemptCount =0 
let previousGuesses =[]


const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const attemptsLeft = document.getElementById('attemptsLeft');
const pastGuesses = document.getElementById('previousGuesses');
const resetBtn = document.getElementById('resetBtn')



guessBtn.addEventListener('click',function(){
    let userGuess= Number(guessInput.value)
    if (isNaN(userGuess)){
        feedback.textContent="Please enter a valid number";
        return;
    } 
    if (previousGuesses.includes(userGuess)){
        feedback.textContent="Already Entered"
        return
    }
    attemptCount++;
    previousGuesses.push(userGuess);

    if (userGuess === myNum){
        feedback.textContent= "Correct";
        guessBtn.disabled= true;
        guessInput.disabled=true
    } else if(userGuess>myNum){
        feedback.textContent="High"
    } else {
        feedback.textContent="Low"
    }

    pastGuesses.textContent= previousGuesses.join(", ");

    attemptsLeft.textContent=`Attempt Count: ${10-attemptCount}`;

    if(attemptCount===10&& !guessBtn.disabled){
        feedback.textContent=`My num is ${myNum}`;
        guessBtn.disabled= true;
        guessInput.disabled=true

    }

})

