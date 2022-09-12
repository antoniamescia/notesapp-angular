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
    id: number;
    temperture: number;
    type: WeatherType;
    
}

// The in-memory web api library currently assumes that every collection has a primary key called id.

