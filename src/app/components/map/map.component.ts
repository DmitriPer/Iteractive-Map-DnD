import { Component, Input, OnChanges } from '@angular/core';
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
  backgroundStyle = {};

  ngOnChanges(): void {
    if (this.backgroundUrl) {
      this.backgroundStyle = {
        'background-image': `url(${this.backgroundUrl})`,
      };
    }
  }

  onDragEnd(event: CdkDragEnd, token: Token): void {
    token.position = event.source.getFreeDragPosition();
  }

  removeToken(token: Token): void {
    const index = this.tokens.indexOf(token);
    if (index !== -1) {
      this.tokens.splice(index, 1);
    }
  }
}
