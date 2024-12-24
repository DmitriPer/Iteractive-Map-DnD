import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {MapsDataService} from '../../services/maps-data.service';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit {
  @Output() mapSelected = new EventEmitter<{ name:string,path:string }>();
  private mapService = inject(MapsDataService);
  maps:any = [];
  public openMapMenu:boolean = false;

  ngOnInit(): void {
    this.mapService.getMaps().subscribe((maps: any[]) => {
      this.maps = maps;
    });
  }

  onMapClick(map:{name:string,path:string}): void {
    this.mapSelected.emit(map);
  }

  toggleMapMenu(): void {
    this.openMapMenu =!this.openMapMenu;
  }
}
