import { Component } from '@angular/core';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { MapComponent } from './components/map/map.component';
import { CharacterMenuComponent } from './components/character-menu/character-menu.component';
import { EnemyMenuComponent } from './components/enemy-menu/enemy-menu.component';
import { EnemyTemplate } from './interfaces/enemy.interface';
import { Token } from './models/token.model';

const BOSS_NAMES = new Set(['Hooded Dark Wizard', 'Dark Bober']);

@Component({
    selector: 'app-root',
    host: { style: 'display:flex; flex-direction:column; height:100vh;' },
    imports: [TopMenuComponent, MapComponent, CharacterMenuComponent, EnemyMenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interactive-map';
  placedTokens: Token[] = [];
  currentMapPath = '/assets/imgData/maps/First_Logo.png';
  currentMapName = '1';

  onMapSelected(map: { name: string; path: string }): void {
    if (this.currentMapPath === map.path) return;
    this.currentMapPath = map.path;
    this.currentMapName = map.name;
    this.placedTokens = [];
  }

  onIconSelected(icon: { icon: string; title: string }): void {
    this.placedTokens.push({
      id: crypto.randomUUID(),
      type: 'character',
      name: icon.title,
      imageUrl: icon.icon,
      position: { x: 0, y: 0 },
      isVisible: true,
      mapId: this.currentMapName,
    });
  }

  onEnemySelected(enemy: EnemyTemplate): void {
    this.placedTokens.push({
      id: crypto.randomUUID(),
      type: BOSS_NAMES.has(enemy.name) ? 'boss' : 'enemy',
      name: enemy.name,
      imageUrl: enemy.icon,
      position: { x: 0, y: 0 },
      isVisible: true,
      mapId: this.currentMapName,
    });
  }
}
