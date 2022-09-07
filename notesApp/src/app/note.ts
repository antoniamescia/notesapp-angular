import { Weather } from './weather'; 

export interface Note {
    id: number;
    title: string;
    description: string;
    city: string;
    date: Date;
    weather: Weather;
}