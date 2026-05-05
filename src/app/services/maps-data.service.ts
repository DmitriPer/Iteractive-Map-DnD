import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MapData } from '../interfaces/map.interface';

@Injectable({
  providedIn: 'root',
})
export class MapsDataService{
  private jsonUrl = 'assets/data/maps.json';
  private http = inject(HttpClient);

  getMaps(): Observable<MapData[]> {
    return this.http.get<MapData[]>(this.jsonUrl).pipe(
      catchError(err => {
        console.error('Failed to load maps:', err);
        return of([]);
      })
    );
  }
}
