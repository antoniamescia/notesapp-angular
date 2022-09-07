export enum WeatherType {
    Sunny,
    Cloudy,
    Rainy,
    Snowy,
    Windy,
    Stormy,
    Foggy,
    Hazy,
    Misty,
    Dusty,
    Smoggy,
}

export interface Weather {
    temperture: number;
    type: WeatherType;
    
}

