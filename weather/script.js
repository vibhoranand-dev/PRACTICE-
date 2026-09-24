let city = document.getElementById("city");
let search = document.getElementById("search");
let weather= document.getElementById("weather")

function getWeather(cityName){



let url = `https://wttr.in/${cityName}?format=j1`;
console.log(url);

fetch(url)
 .then(res=> res.json())
 .then(data=>{
    console.log(data);
    let temp=data.current_condition[0].temp_C;
    let desc = data.current_condition[0].weatherDesc[0].value;
    weather.textContent= `${temp}°C ,${desc}`;
 })
 .catch(err=>console.log(err));

}

search.addEventListener("click",function(){
    let cityName= city.value;
    getWeather(cityName);

})