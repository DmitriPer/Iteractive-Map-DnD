import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {MapsDataService} from '../../services/maps-data.service';
import { MapData } from '../../interfaces/map.interface';

@Component({
    selector: 'app-top-menu',
    imports: [],
    templateUrl: './top-menu.component.html',
    styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit {
  @Output() mapSelected = new EventEmitter<MapData>();
  private mapService = inject(MapsDataService);
  maps: MapData[] = [];
  openMapMenu = false;

  ngOnInit(): void {
    this.mapService.getMaps().subscribe((maps: MapData[]) => {
      this.maps = maps;
    });
  }

  onMapClick(map: MapData): void {
    this.mapSelected.emit(map);
  }

  toggleMapMenu(): void {
    this.openMapMenu = !this.openMapMenu;
  }
}
