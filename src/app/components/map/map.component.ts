import {Component, Input, OnChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapIcon} from '../../interfaces/map.interface';
import {CdkDragEnd, DragDropModule} from '@angular/cdk/drag-drop';
import {Enemy} from '../../interfaces/enemy.interface';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnChanges {
  @Input() placedIcons: MapIcon[] = [];
  @Input() enemyIcons: Enemy[] = [];
  @Input() backgroundUrl!: string;
  mapStyles = {};

  ngOnChanges(): void {
    if (this.backgroundUrl) {
      const img = new Image();
      img.src = this.backgroundUrl;
      img.onload = () => {
        this.mapStyles = {
          'background-image': `url(${this.backgroundUrl})`,
          width: `${img.width}px`,
          height: `${img.height}px`,
        };
      };
    }
  }

  onDragEnd(event: CdkDragEnd, icon: MapIcon | Enemy): void {
    const pos = event.source.getFreeDragPosition();
    icon.x = pos.x;
    icon.y = pos.y;
  }

  removeIcon(icon: MapIcon): void {
    const index = this.placedIcons.indexOf(icon);
    if (index !== -1) {
      this.placedIcons.splice(index, 1);
    }
  }

  removeEnemy(enemy: Enemy): void {
    const index = this.enemyIcons.indexOf(enemy);
    if (index !== -1) {
      this.enemyIcons.splice(index, 1);
    }
  }
}
