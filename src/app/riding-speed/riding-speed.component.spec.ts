import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidingSpeedComponent } from './riding-speed.component';

describe('RidingSpeedComponent', () => {
  let component: RidingSpeedComponent;
  let fixture: ComponentFixture<RidingSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidingSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidingSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
