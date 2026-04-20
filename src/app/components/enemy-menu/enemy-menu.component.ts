import { Component, Input, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { take } from 'rxjs';

import { EnemyTemplate } from '../../interfaces/enemy.interface';
import { EnemyDataService } from '../../services/enemy-data.service';

@Component({
    selector: 'app-enemy-menu',
    imports: [],
    templateUrl: './enemy-menu.component.html',
    styleUrl: './enemy-menu.component.scss'
})
export class EnemyMenuComponent implements OnInit {
  @Input() set mapName(value: string) {
    this._mapName = value;
    this.filterEnemies();
  }

  @Output() iconSelected = new EventEmitter<EnemyTemplate>();

  enemies: EnemyTemplate[] = [];
  showMenu = true;

  private _mapName = '';
  private allEnemyData: any[] = [];
  private enemyDataService = inject(EnemyDataService);

  ngOnInit(): void {
    this.enemyDataService.getEnemies().pipe(take(1)).subscribe((data: any) => {
      this.allEnemyData = data;
      this.filterEnemies();
    });
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  onEnemyIconClick(enemy: EnemyTemplate): void {
    this.iconSelected.emit(enemy);
  }

  private filterEnemies(): void {
    const mapData = this.allEnemyData.find((map: any) => map.mapName === this._mapName);
    this.enemies = mapData ? mapData.enemies : [];
  }
}
