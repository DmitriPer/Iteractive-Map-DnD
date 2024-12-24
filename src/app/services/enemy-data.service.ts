import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnemyDataService {
  private enemyDataUrl = 'assets/data/enemies.json'; // נתיב לקובץ ה-JSON

  constructor(private http: HttpClient) {}

  getEnemies(): Observable<any> {
    return this.http.get<any>(this.enemyDataUrl);
  }
}
