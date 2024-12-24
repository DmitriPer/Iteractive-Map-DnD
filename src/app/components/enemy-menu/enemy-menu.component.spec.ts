import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyMenuComponent } from './enemy-menu.component';

describe('EnemyMenuComponent', () => {
  let component: EnemyMenuComponent;
  let fixture: ComponentFixture<EnemyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnemyMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnemyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
