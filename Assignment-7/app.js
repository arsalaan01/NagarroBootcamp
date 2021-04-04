
const key = "a10a1b70cd5dc13d9323ebed42c71f68";
const base = "https://api.openweathermap.org/data/2.5/";
 
  
  const searchbox = document.querySelector('.search');
  searchbox.addEventListener('keypress', query);
  
  function query(e) {
    if (e.keyCode == 13) {
      getInformation(searchbox.value);
    }
  }
  console.log(`${base}weather?q=${query}&units=metric&APPID=${key}`);
  function getInformation(query) {
    fetch(`${base}weather?q=${query}&units=metric&APPID=${key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.output .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let newDate = new Date();
    let date = document.querySelector('.output .date');
    date.innerText = dateBuilder(newDate);
  
    let temp = document.querySelector('.result .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weatherUpdate = document.querySelector('.result .weather');
    weatherUpdate.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hiorlow');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }