import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterIconComponent } from './character-icon.component';

describe('CharacterIconComponent', () => {
  let component: CharacterIconComponent;
  let fixture: ComponentFixture<CharacterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
