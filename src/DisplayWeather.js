import React from "react";

function DisplayWeather(props){
    
    
    let city = props.cityName.toLowerCase();
    const currentTemp = temperatureConverter(props.value.main.temp) + "°C";
    const minTemp = temperatureConverter(props.value.main.temp_min) + "°C";
    const maxTemp = temperatureConverter(props.value.main.temp_max) + "°C";
    const weatherDescription = props.value.weather[0].main;
    const weatherIcon = `https://openweathermap.org/img/wn/${props.value.weather[0].icon}@2x.png`
    
    function temperatureConverter(value) { //from Kelvin to Celsius
        value = parseFloat(value);
        return Math.floor(value-273.15);
      }

    return(
        
        <div className="weather-data">
            {console.log("props", props.value)}
            {city && <h2>{city = city[0].toUpperCase() + city.slice(1)}</h2>}
            <div className="icon-temp">
                <img src={weatherIcon} alt="not-working" className="weather-icon"/>
                <h4 className="current-temp">{currentTemp}</h4>
            </div>
            <h5 className="weather-description">{weatherDescription}</h5>
            <h5>H:{maxTemp} L:{minTemp}</h5>
        </div>                   
    );
}

export default DisplayWeather;