// let city =  document.getElementById('form-control me-2').value ;
// const URL = `${url}?city=${city}` ;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '95911a46dbmshd43b90c317d4c24p1c1911jsn8766e45711cc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    }
}; 
const getWeather = (city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then(response => {


        console.log(response)
        //cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML =response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML  = response.sunset
        
    })
    .catch(err => console.error(err));
}
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        getWeather(city.value)
    })
    getWeather("pune")