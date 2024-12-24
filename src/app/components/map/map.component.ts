import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapIcon} from '../../interfaces/map.interface';
import { DragDropModule} from '@angular/cdk/drag-drop';
import {Enemy} from '../../interfaces/enemy.interface';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule,DragDropModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnChanges{
  @Input() placedIcons: MapIcon[] = [];
  @Input() enemyIcons: Enemy[] = [];
  @Input() backgroundUrl!: string;
  mapStyles = {};

  private previousMouseX: number | null = null;
  private previousMouseY: number | null = null;


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

  onDragMoved(event: any, icon: any): void {
    const { x: currentMouseX, y: currentMouseY } = event.pointerPosition;

    if (this.previousMouseX !== null && this.previousMouseY !== null) {
      const deltaX = currentMouseX - this.previousMouseX;
      const deltaY = currentMouseY - this.previousMouseY;

      icon.x += deltaX;
      icon.y += deltaY;
    }

    this.previousMouseX = currentMouseX;
    this.previousMouseY = currentMouseY;
  }

  onDragEnd(): void {
    // Reset previous mouse positions
    this.previousMouseX = null;
    this.previousMouseY = null;
  }

  removeIcon(icon: MapIcon ): void {
    const index = this.placedIcons.indexOf(icon);
    if (index !== -1) {
      this.placedIcons.splice(index, 1);
    }
  }

  removeEnemy(enemy: Enemy): void {
    const index = this.enemyIcons.indexOf(enemy);
    if (index!== -1) {
      this.enemyIcons.splice(index, 1);
    }
  }
}
