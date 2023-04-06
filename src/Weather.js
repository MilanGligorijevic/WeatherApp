import React from "react";
import DisplayWeather from "./DisplayWeather";

let toggleForm = false;

function Weather(){
    
    const APIKEY = "ffc3156f7ff7ff775f88986b4d7d24dc";


    const [form, setForm] = React.useState({
        city: "",
        country: ""
    });

    const [weather, setWeather] = React.useState({});

    function handleChange(event){
        let {name, value} = event.target;
        toggleForm = false;
        if(name === "city"){
            setForm(prevState => ({...prevState, city: value}))
        }

        if(name === "country"){
            setForm(prevState => ({...prevState, country: value}))
        }
        
        

    }

    async function getWeatherData(event){
        event.preventDefault();
        toggleForm = true;
        if(form.city === "") {
            alert("Add value for city!")
        }else{
            const geoData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${form.city}&appid=${APIKEY}`
            ).then(response => response.json()).then(data => data);
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${APIKEY}`
            ).then(response => response.json()).then(data => data);
            setWeather(
                {
                data: data
                }
            );
        }
        
    }

    return(
        <div className="main-containter">
        <h1 className="headline">Weather App</h1>
        <form className="inputs">
            <input 
            type="text" 
            className="input-city"
            placeholder="Enter city"
            name="city"
            onChange={event => handleChange(event)}
            /> 
            <button 
            className="button-submit"
            onClick={event => getWeatherData(event)}    
            >
            Submit
            </button>
        </form>
        {
            
            toggleForm ? (

            <div className="weather-card">
                <DisplayWeather value={weather.data} cityName={form.city}/>
            </div>
       ) : null }
      </div>
    );
}

export default Weather;