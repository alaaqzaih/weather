import React, { Component , useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import storm from '../weather-icons/storm.svg';
import cloudy from '../weather-icons/cloudy.svg';
import rain from '../weather-icons/rain.svg';
import snow from '../weather-icons/snow.svg';
import drizzle from '../weather-icons/drizzle.svg';
import clear from '../weather-icons/clear.svg';
import unknown from '../weather-icons/unknown.svg';
import mostlycloudy from '../weather-icons/mostlycloudy.svg';
import partlycloudy from '../weather-icons/partlycloudy.svg';
import fog from '../weather-icons/fog.svg';
const Weather = () => {


    // let temp = (data.main.temp - 273.15).toFixed(2);
    // let temp_min = (data.main.temp_min - 273.15).toFixed(2);
    // let temp_max = (data.main.temp_max - 273.15).toFixed(2);
    
    
    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", {month: 'long'});
    let day = d.toLocaleString("default", {weekday: 'long'});
    
    
    let time = d.toLocaleString([],{
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit'
    });
    

return(

    <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div class="card  text-white text-center border-0">
        
                            <div class="card-img-overlay">
                               
                                <div >

                                {/* <h2 class="card-title">{data.name}</h2> */}
                                <h2 class="card-title">London</h2>

                                <p class="card-text lead">
                                  {day} , {month} {date}, {year}.
                                  <br />
                                  {time}
                                  </p>
                                {/* <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
                                <hr />
                                
                                {/* <i > <img src={storm} alt="storm icon" /> </i> */}
                                <i > <img src={storm} alt="storm icon" /> </i>

                                {/* <h1 className='fw-bolder mb-5'> {temp} &deg;C</h1> */}
                                <h1 className='fw-bolder mb-5'> 22 &deg;C</h1>
                                <p className="lead fw-bolder mb-0">Clear</p>

                                {/* <p className="lead fw-bolder mb-0">{data.weather[0].main}</p> */}
                                {/* <p className="lead">{temp_min} &deg;C | {temp_max} &deg;C  </p> */}
                                <p className="lead">5 &deg;C to 8 &deg;C  </p>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
)

    
}

export default Weather;
