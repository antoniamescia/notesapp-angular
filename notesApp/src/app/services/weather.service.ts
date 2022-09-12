import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, retry, catchError } from 'rxjs';
import { Weather } from '../weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherUrl: string = 'api/weather';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.weatherUrl).pipe(
      retry(3),
      catchError(this.handleError<Weather[]>('getWeather', []))
    );
  }

  private log(message: string) {
    console.log(`WeatherService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
