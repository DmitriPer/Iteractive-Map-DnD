import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterDataService {
  private jsonUrl = 'assets/data/characters.json';
  private http = inject(HttpClient);

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.jsonUrl);
  }
}
