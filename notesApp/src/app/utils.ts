import { WeatherType, Weather } from './weather';

export class Utils {
    public static setWeatherIcon(weatherType: WeatherType): string {
        switch (weatherType) {
            case WeatherType.Sunny:
                return 'bi bi-brightness-high';
            case WeatherType.Cloudy:
                return 'bi bi-cloud';
            case WeatherType.Rainy:
                return 'bi bi-cloud-drizzle';
            case WeatherType.Snowy:
                return 'bi bi-cloud-snow';
            case WeatherType.Windy:
                return 'bi bi-wind';
            case WeatherType.Stormy:
                return 'bi bi-cloud-lightning-rain';
            case WeatherType.Foggy:
                return 'bi bi-cloud-fog';
            case WeatherType.Hazy:
                return 'bi bi-cloud-haze2';
            case WeatherType.Misty:
                return 'bi bi-snow';
            case WeatherType.Dusty:
                return 'bi bi-rainbow';
            case WeatherType.Smoggy:
                return 'bi bi-fire';
            default:
                return '';
        }
    }
}