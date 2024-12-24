import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterDataService {
  private jsonUrl = 'assets/data/characters.json';
  private http = inject(HttpClient)

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
