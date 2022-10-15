const API_KEY =`d8da72d1c7aa558277ef871f6694d608`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}
setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature =>{
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);
    
    //Set weather Icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    console.log(temperature);
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}