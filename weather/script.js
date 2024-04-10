const apikey="69adee76bb7b1bea31aa6edaeded507d"
const btn = document.querySelector("#locSub");

const search = document.querySelector("#locAdr");

let form = document.getElementById("form");
const icon = document.querySelector(".icon")

const temperature = document.querySelector(".Temperature")
const mainbox = document.querySelector(".mainbox")
const wind = document.querySelector(".wind")
const feelsLike = document.querySelector(".feelsLike")
const humidity = document.querySelector(".humidText")
const imag = document.querySelector("#insideImg")
const description = document.querySelector(".Description")

let humid
let breeze

const apiAddress= "https://api.openweathermap.org/data/2.5/weather?q="

  function searchh(){

  form.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(search.value===''){
    search.placeholder="NOT VALID"
  }
  else{
  weatherParse(search.value)
}
})
  }

async function weatherParse(city){
   let jsonlink= await fetch(apiAddress+city+"&appid="+apikey+"&units=metric");
   let data =await jsonlink.json();
   console.log(data)

  
    if(data.weather["0"]["main"]=="Rain"){
      imag.src= "images/rain.png"
  }
    if(data.weather["0"]["main"]=="Clouds"){
      imag.src= "images/clouds.png"
  }
    if(data.weather["0"]["main"]=="Sunny"){
      imag.src= "images/sun.png"
  }
    if(data.weather["0"]["main"]=="Overcast"){
      imag.src= "images/clouds.png"
  }
    if(data.weather["0"]["main"]=="Clear"){
      imag.src= "images/clear.png"
  }
    if(data.weather["0"]["main"]=="Thunderstorm"){
      imag.src= "images/thunderstorm.png"
  }
    if(data.weather["0"]["main"]=="Snow"){
      imag.src= "images/snow.png"
  }
    if(data.weather["0"]["main"]=="Mist"){
      imag.src= "images/mist.png"
  }
    if(data.weather["0"]["main"]=="Haze"){
      imag.src= "images/haze.png"
  }

  feelsLike.innerHTML= `${data.main["feels_like"]}°C`
  wind.innerHTML= `${data.wind["speed"]}km/h`
  humidity.innerHTML= `${data.main["humidity"]}%`
  temperature.innerHTML= `${data.main["temp"]}°C`
  description.innerHTML= `${data.weather[0]["description"]}`
}
// value.toFixed(2) + ' °C'

searchh()
