import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapIcon } from '../../interfaces/map.interface';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { PlacedEnemy } from '../../interfaces/enemy.interface';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnChanges {
  @Input() placedIcons: MapIcon[] = [];
  @Input() enemyIcons: PlacedEnemy[] = [];
  @Input() backgroundUrl!: string;
  backgroundStyle = {};

  ngOnChanges(): void {
    if (this.backgroundUrl) {
      this.backgroundStyle = {
        'background-image': `url(${this.backgroundUrl})`,
      };
    }
  }

  onDragEnd(event: CdkDragEnd, icon: MapIcon | PlacedEnemy): void {
    icon.position = event.source.getFreeDragPosition();
  }

  removeIcon(icon: MapIcon): void {
    const index = this.placedIcons.indexOf(icon);
    if (index !== -1) {
      this.placedIcons.splice(index, 1);
    }
  }

  removeEnemy(enemy: PlacedEnemy): void {
    const index = this.enemyIcons.indexOf(enemy);
    if (index !== -1) {
      this.enemyIcons.splice(index, 1);
    }
  }
}
