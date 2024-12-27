import { Component } from '@angular/core';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { MapComponent } from './components/map/map.component';
import { CharacterMenuComponent } from './components/character-menu/character-menu.component';
import { CommonModule } from '@angular/common';
import {MapIcon} from './interfaces/map.interface';
import {EnemyMenuComponent} from './components/enemy-menu/enemy-menu.component';
import {Enemy} from './interfaces/enemy.interface'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,TopMenuComponent,MapComponent,CharacterMenuComponent,EnemyMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interactive-map';
  placedIcons: MapIcon[] = [];
  placedEnemies:Enemy[]=[];
  currentMapPath = '/assets/imgData/maps/Act.jpg';
  currentMapName = '1';

  onMapSelected(map:{name:string;path:string }): void {
    this.currentMapPath = map.path;
    this.currentMapName = map.name;
  }

  onIconSelected(icon: { icon: string; title: string }): void {
    this.placedIcons.push(icon);
  }

  onEnemySelected(enemy: Enemy): void {
   this.placedEnemies.push(enemy)
  }
}
