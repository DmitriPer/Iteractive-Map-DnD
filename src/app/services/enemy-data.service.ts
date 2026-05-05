import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnemyMapData } from '../interfaces/enemy.interface';

@Injectable({
  providedIn: 'root',
})
export class EnemyDataService {
  private enemyDataUrl = 'assets/data/enemies.json';
  private http = inject(HttpClient);

  getEnemies(): Observable<EnemyMapData[]> {
    return this.http.get<EnemyMapData[]>(this.enemyDataUrl).pipe(
      catchError(err => {
        console.error('Failed to load enemies:', err);
        return of([]);
      })
    );
  }
}
