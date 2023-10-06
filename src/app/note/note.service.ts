import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';
import { environment } from 'src/environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiServerUrl =environment.apiBaseUrl;
  constructor(
    private http: HttpClient
  ) { }
  public getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiServerUrl}/api/notes`)
  }
  public createNote(newNote: Note,consultationId : number): Observable<Note> {
    return this.http.post<Note>(`${this.apiServerUrl}/api/notes/${consultationId}`, newNote)
  }
}
