import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../note';
import { Weather, WeatherType } from '../weather';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  weathers: Weather[] = [];
  notes: Note[] = [];

  note: Note = {
    id: 1,
    title: 'Note 1',
    description: 'This is the first note cnsdjncsdjcnbdsjcnvjskdnjkvsnkjscnkjscnjdskcndsjkcndsk',
    city: 'Montevideo',
    date: new Date(),
    weather: { 
      id: 1,
      temperture: 20,
      type: WeatherType.Cloudy
    }
  }

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  // Esto no va acá! Estoy probando nomás.
  private getNotes(): void {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
      console.log(this.notes);
      
    });
  }

}
