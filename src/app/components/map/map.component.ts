import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { Token } from '../../models/token.model';

@Component({
    selector: 'app-map',
    imports: [CommonModule, DragDropModule],
    templateUrl: './map.component.html',
    styleUrl: './map.component.scss'
})
export class MapComponent implements OnChanges {
  @Input() tokens: Token[] = [];
  @Input() backgroundUrl!: string;
  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;
  backgroundStyle = {};

  ngOnChanges(): void {
    if (this.backgroundUrl) {
      this.backgroundStyle = {
        'background-image': `url(${this.backgroundUrl})`,
      };
    }
  }

  getPixelPosition(token: Token): { x: number; y: number } {
    if (!this.mapContainer) return { x: 0, y: 0 };
    const { offsetWidth, offsetHeight } = this.mapContainer.nativeElement;
    return {
      x: (token.position.x / 100) * offsetWidth,
      y: (token.position.y / 100) * offsetHeight,
    };
  }

  onDragEnd(event: CdkDragEnd, token: Token): void {
    const { offsetWidth, offsetHeight } = this.mapContainer.nativeElement;
    const px = event.source.getFreeDragPosition();
    token.position = {
      x: (px.x / offsetWidth) * 100,
      y: (px.y / offsetHeight) * 100,
    };
  }

  removeToken(token: Token): void {
    const index = this.tokens.indexOf(token);
    if (index !== -1) {
      this.tokens.splice(index, 1);
    }
  }
}
