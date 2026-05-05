import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterDataService {
  private jsonUrl = 'assets/data/characters.json';
  private http = inject(HttpClient);

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.jsonUrl).pipe(
      catchError(err => {
        console.error('Failed to load characters:', err);
        return of([]);
      })
    );
  }
}
