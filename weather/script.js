
let city = document.getElementById("city");
let search = document.getElementById("search");
let weather= document.getElementById("weather")

function getWeather(cityName){

if (cityName.trim()===""){
   return
}

let url = `https://wttr.in/${cityName}?format=j1`;
console.log(url);


fetch(url)
 .then(data=> data.json())
 .then(data=>{
    console.log(data);
    let temp=data.current_condition[0].temp_C;
    let desc = data.current_condition[0].weatherDesc[0].value;
    weather.textContent= `${temp}°C ,${desc}`;
 })
 .catch(error=>{
    error.textContent= "City not found";
    log.console("Error:",error)
 });

}

search.addEventListener("click",function(){
    let cityName= city.value;
    getWeather(cityName);

})