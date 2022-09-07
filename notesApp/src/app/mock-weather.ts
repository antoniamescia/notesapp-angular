import { Weather, WeatherType } from './weather';

export const WEATHER: Weather[] = [
    {temperture: 20, type: WeatherType.Sunny},
    {temperture: 15, type: WeatherType.Cloudy},
    {temperture: 10, type: WeatherType.Rainy},
    {temperture: 5, type: WeatherType.Snowy},
    {temperture: 0, type: WeatherType.Windy},
    {temperture: -5, type: WeatherType.Stormy},
    {temperture: -10, type: WeatherType.Foggy},
    {temperture: -15, type: WeatherType.Hazy},
    {temperture: -20, type: WeatherType.Misty}
]