import { Injectable } from '@angular/core';
import { Note } from '../note';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { getLocaleMonthNames } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl: string = 'api/notes';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.notesUrl).pipe(
      retry(3),
      // Handle error
    );
  }
  
  getNoteById(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.notesUrl}/${id}`);
  }
  
  //TODO: addNote
  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.notesUrl, note, this.httpOptions).pipe(
      retry(3),
      tap((newNote: Note) => this.log(`added note with id=${newNote.id}`)),
      catchError(this.handleError<Note>('addNote'))
    );
  }
  
  //TODO: updateNote
  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(this.notesUrl, note, this.httpOptions).pipe(
      retry(3),
      tap(_ => this.log(`updated note id=${note.id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }
  
  //Le paso el id o la nota entera?
  deleteNote(note: Note): Observable<Note> {
    return this.http.delete<Note>(this.notesUrl, this.httpOptions).pipe(
      retry(3),
      tap(_ => this.log(`deleted note id=${note.id}`)),
      catchError(this.handleError<Note>('deleteNote'))
    );
  }
  
  private log(message: string) {
    console.log(`NoteService: ${message}`);
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   HttpClient is configured into our NoteService, but we need to configure it into our AppModule.
   IMPORTANT: make the note list component subscribe to the observable returned by getNotes() and display the notes.
   */
}
