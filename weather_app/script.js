const api_key = `d494fd1082e25c65b5007e87af6dea4d`
const form = document.querySelector("form");
const search = document.querySelector("#search")
const weather = document.querySelector("#weather");


async function getWeather(city){
     weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
        const responce = await fetch(url);
        const data = await responce.json()
        return showWeather(data);
}

function showWeather(data){
    if( data.cod == "404"){
        weather.innerHTML = `<h2>City not found</h2>`
        return;
    }
    console.log(data)
    weather.innerHTML =    `<div>
              <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h1>${data.main.temp} ℃</h1>
                <h3>${data.weather[0].main}</h3>
            </div>`
}



form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();   
    }
)