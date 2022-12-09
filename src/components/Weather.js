import React, { Component, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import storm from '../weather-icons/storm.svg';
// import cloudy from '../weather-icons/cloudy.svg';

const Weather = (props) => {




    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", { month: 'long' });
    let day = d.toLocaleString("default", { weekday: 'long' });


    let time = d.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });


    return (

        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div class="card  text-black text-center border-0">

                            <div class="card-img-overlay">

                                <div >
                                <h3 class="card-title">{props.name}</h3>


                                    <p class="card-text lead">
                                        {day} , {month} {date}, {year}.
                                        <br />
                                        {time}
                                    </p>
                                  
                                    <hr />

                                    <i>  <img
                                        className="now-img"
                                        src={`./img/weather-icons/${props.image}.svg`}
                                        alt="" />  </i>

                            
                                    <h2 className="description">{props.currentWeather?.weather[0]?.description}</h2>

                                    <p className='fw-bolder mb-1'>Temperature <br/>
      {props.currentWeather?.main?.temp_min}&deg;C to {props.currentWeather?.main?.temp_max}&deg;C</p>
      <p class="card-text lead">
      Humidity 
        {props.currentWeather?.main?.humidity}%  , Pressure  {props.currentWeather?.main?.pressure}     
                                    </p>
                                  

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
