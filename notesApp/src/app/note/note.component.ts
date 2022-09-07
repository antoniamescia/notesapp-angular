import { Component, OnInit } from '@angular/core';
import { AddNoteService } from '../add-note.service';
import { EditNoteService } from '../edit-note.service';
import { WeatherService } from '../weather.service';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  selectedNote?: Note;

  notes: Note[] = [];

  constructor(private addNoteService : AddNoteService, private editNoteService: EditNoteService, public weatherService : WeatherService) { }

  ngOnInit(): void {
  }

  // getNotes(): void {
  //   this.addNoteService.getNotes().subscribe(notes => this.notes = notes);
  // }
}
