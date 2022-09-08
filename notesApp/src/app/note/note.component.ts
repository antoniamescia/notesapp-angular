import { Component, OnInit } from '@angular/core';
import { AddNoteService } from '../add-note.service';
import { EditNoteService } from '../edit-note.service';
import { WeatherService } from '../weather.service';
import { Note } from '../note';
import { WeatherType } from '../weather';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  //selectedNote?: Note;

  note: Note = {
    id: 1,
    title: 'Note 1',
    description: 'This is the first note',
    city: 'London',
    date: new Date(),
    weather: { 
      temperture: 20,
      type: WeatherType.Cloudy
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  // getNotes(): void {
  //   this.addNoteService.getNotes().subscribe(notes => this.notes = notes);
  // }
}
