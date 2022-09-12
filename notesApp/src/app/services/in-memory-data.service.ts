import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Note } from '../note';
import { Weather, WeatherType } from '../weather';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let notes: Note[] = [
      {
        id: 1,
        title: 'Note 1',
        description: 'Description 1',
        city: 'City 1',
        date: new Date(),
        weather: { id: 1, temperture: 20, type: 0 },
      },
      {
        id: 2,
        title: 'Note 2',
        description: 'Description 2',
        city: 'City 2',
        date: new Date(),
        weather: { id: 2, temperture: 20, type: 0 },
      },
      {
        id: 3,
        title: 'Note 3',
        description: 'Description 3',
        city: 'City 3',
        date: new Date(),
        weather: { id: 3, temperture: 20, type: 0 },
      },
      {
        id: 4,
        title: 'Note 4',
        description: 'Description 4',
        city: 'City 4',
        date: new Date(),
        weather: { id: 4, temperture: 20, type: 0 },
      },
      {
        id: 5,
        title: 'Note 5',
        description: 'Description 5',
        city: 'City 5',
        date: new Date(),
        weather: { id: 5, temperture: 20, type: 0 },
      },
    ];
    
    let weather: Weather[] = [
      { id: 1, temperture: 20, type: WeatherType.Sunny },
      { id: 2, temperture: 30, type: WeatherType.Cloudy },
      { id: 3, temperture: 10, type: WeatherType.Rainy },
      { id: 4, temperture: 4, type: WeatherType.Snowy },
      { id: 5, temperture: 5, type: WeatherType.Windy },
      { id: 6, temperture: 18, type: WeatherType.Stormy },
      { id: 7, temperture: 33, type: WeatherType.Foggy },
      { id: 8, temperture: 24, type: WeatherType.Hazy },
    ];
    return { notes, weather };
  }

  genNoteId(notes: Note[]): number {
    return Date.now();
  }

  genWeatherId(weathers: Weather[]): number {
    return weathers.length
  }
}