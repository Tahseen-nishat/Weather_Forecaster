const BASE_URL="https://api.openweathermap.org/data/2.5/weather?q=";

const apiid="&appid=997c2339dd6fedf59f53a1a2ce2faa46&units=metric";

let name=document.querySelector("#city");
let search=document.querySelector("#btn");
let city_name=document.querySelector(".temp h2");
let weather_img=document.querySelector(".wheather img");
weather_img.style.height="250px";
weather_img.style.width="250px";
search.addEventListener("click",()=>{
    checkweather();
})
const checkweather=async ()=>{
    let city=name.value;
    let res=await fetch(BASE_URL+city+apiid);
    let data=await res.json();
    let disc=data.weather[0].main;
    document.querySelector(".temp h1").innerHTML=Math.round(data.main.temp)+" °C  "+disc;
    document.querySelector("#humi").innerHTML=data.main.humidity+" %";
    document.querySelector("#windi").innerHTML=data.wind.speed+" km/hr";
    city_name.innerText=data.name;
    if(data.weather[0].main==="Clear"){
        weather_img.src="clear.png";
    }else if(data.weather[0].main==="Clouds"){
        weather_img.src="clouds.png";
    }else if(data.weather[0].main==="Drizzle"){
        weather_img.src="drizzle.png";
    }
    else if(data.weather[0].main==="Humidity"){
        weather_img.src="humidity.png";
    }
    else if(data.weather[0].main==="Mist"){
        weather_img.src="mist.png";
    }
    else if(data.weather[0].main==="Rain"){
        weather_img.src="rain.png";
    }
    else if(data.weather[0].main==="Snow"){
        weather_img.src="snow.png";
    }
    else if(data.weather[0].main==="Wind"){
        weather_img.src="wind.png";
    }

}
