const apiKey = "581738e6a29243a7db5757754fd2fb3d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const manImg = document.querySelector(".img img");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        var data = await response.json();
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    

    if(data.weather[0].main == "Clouds"){

        weatherIcon.src = "assets/images/clouds.png";
        manImg.src = "assets/images/img-3.png";
        
        
        

    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "assets/images/clear.png";
       manImg.src = "assets/images/img-4.png";
       
        
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/images/rain.png";
        manImg.src = "assets/images/img-2.png";
        
        
        
    }
    else if(data.weather[0].main == "Drizzle"){
    
        weatherIcon.src = "assets/images/drizzle.png";
        manImg.src = "assets/images/img-5.png";
       
        
       
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/images/mist.png";
        manImg.src = "assets/images/img-6.png";
        
        
        
    }

    document.querySelector(".image").style.display = "none";
    manImg.parentElement.style.display = "block";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


