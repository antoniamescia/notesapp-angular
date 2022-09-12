import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather, WeatherType } from '../weather';
import { Utils } from '../utils';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weathers: Weather[] = [];
  
  weather: Weather = {
    id: 1,
    temperture: 20,
    type: WeatherType.Cloudy
  }

  icon = document.getElementById("weather");
  //icon.class = Utils.getWeatherIcon(this.weather.type);


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeathers();
  }

  getWeathers(): void {
    this.weatherService.getWeathers().subscribe(weathers => {
      this.weathers = weathers;
      console.log(this.weathers);  
    });
      
  }

}
