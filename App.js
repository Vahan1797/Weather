import React from 'react';
import './App.css';
import Info from './Components/Info'
import Form from './Components/Form'
import Weather from './Components/Weather'

const API_KEY = '2c52e55a61cfec0bd7e2109e344210dd'

export default class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault()
    var city = e.target.elements.city.value;


    if (city) {
      const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json()

      var sunset = data.sys.sunset
      var date = new Date()
      date.setTime(sunset)
      var sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: 'Bведите название города'
      })
    }
  }



  render() {
    return (
      <div className='wrapper'>
        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-5'>
                <Info />
              </div>
              <div className='col=xs-7'>
                <Form Method={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  countr={this.state.country}
                  pressure={this.state.pressure}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
