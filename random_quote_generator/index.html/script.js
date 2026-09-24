const quoteText= document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn= document.getElementById("newQuoteBtn");

function getQuote (){
    quoteText.textContent="Loading..."
    fetch("https://api.quotable.io/random")
 .then(res=>res.json())
 .then(data=> {
    quoteText.textContent=data.content;
    quoteAuthor.textContent = data.author;
 })
 .catch(err=> console.log(err));
}
 newQuoteBtn.addEventListener("click",()=>{
    getQuote()
 })

