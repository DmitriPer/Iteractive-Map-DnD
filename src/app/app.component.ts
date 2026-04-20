import { Component } from '@angular/core';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { MapComponent } from './components/map/map.component';
import { CharacterMenuComponent } from './components/character-menu/character-menu.component';

import { MapIcon } from './interfaces/map.interface';
import { EnemyMenuComponent } from './components/enemy-menu/enemy-menu.component';
import { EnemyTemplate, PlacedEnemy } from './interfaces/enemy.interface';

@Component({
    selector: 'app-root',
    host: { style: 'display:flex; flex-direction:column; height:100vh;' },
    imports: [TopMenuComponent, MapComponent, CharacterMenuComponent, EnemyMenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interactive-map';
  placedIcons: MapIcon[] = [];
  placedEnemies: PlacedEnemy[] = [];
  currentMapPath = '/assets/imgData/maps/First_Logo.png';
  currentMapName = '1';

  onMapSelected(map: { name: string; path: string }): void {
    if (this.currentMapPath === map.path) return;
    this.currentMapPath = map.path;
    this.currentMapName = map.name;
    this.placedIcons = [];
    this.placedEnemies = [];
  }

  onIconSelected(icon: { icon: string; title: string }): void {
    this.placedIcons.push({ ...icon, position: { x: 0, y: 0 } });
  }

  onEnemySelected(enemy: EnemyTemplate): void {
    this.placedEnemies.push({ ...enemy, position: { x: 0, y: 0 } });
  }
}
