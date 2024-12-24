import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapsDataService{
  private jsonUrl = 'assets/data/maps.json';
  private http = inject(HttpClient);

  getMaps(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
