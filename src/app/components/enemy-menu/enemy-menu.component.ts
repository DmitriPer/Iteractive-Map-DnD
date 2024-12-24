import {Component, Input, inject, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Enemy} from '../../interfaces/enemy.interface';
import {EnemyDataService} from '../../services/enemy-data.service';

@Component({
  selector: 'app-enemy-menu',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './enemy-menu.component.html',
  styleUrl: './enemy-menu.component.scss'
})
export class EnemyMenuComponent implements OnInit,OnChanges {
  @Input() mapName: string = ''; // שם המפה הנוכחית
  @Output()iconSelected = new EventEmitter<Enemy>();
  enemies: Enemy[] = []; // רשימת האויבים
  private enemyDataService = inject(EnemyDataService);

  showMenu = true;

  ngOnInit() {
    this.loadEnemies();
  }

  ngOnChanges(): void {
    this.loadEnemies();
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  onEnemyIconClick(enemy: Enemy): void {
    this.iconSelected.emit(enemy);
  }
  private loadEnemies(): void {
    this.enemyDataService.getEnemies().subscribe((data:any) => {
      const mapData = data.find((map: any) => map.mapName === this.mapName);
      this.enemies = mapData ? mapData.enemies : [];
    });
  }
}
