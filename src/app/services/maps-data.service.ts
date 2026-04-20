import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapData } from '../interfaces/map.interface';

@Injectable({
  providedIn: 'root',
})
export class MapsDataService{
  private jsonUrl = 'assets/data/maps.json';
  private http = inject(HttpClient);

  getMaps(): Observable<MapData[]> {
    return this.http.get<MapData[]>(this.jsonUrl);
  }
}
