import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import { CharacterDataService } from '../../services/character-data.service';
import { Character } from '../../interfaces/characters.interface';



@Component({
    selector: 'app-character-menu',
    imports: [],
    templateUrl: './character-menu.component.html',
    styleUrl: './character-menu.component.scss'
})
export class CharacterMenuComponent implements OnInit {
  @Output()iconSelected = new EventEmitter<{ icon:string;title:string }>();
  private characterService = inject(CharacterDataService);
  public characters: Character[] = [];

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((characters: Character[]) => {
      this.characters = characters;
    });
  }

  onCharacterClick(icon: {icon:string;title:string}): void {
    this.iconSelected.emit(icon);
  }
}
