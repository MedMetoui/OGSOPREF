import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiStyleComponent } from './ski-style.component';

describe('SkiStyleComponent', () => {
  let component: SkiStyleComponent;
  let fixture: ComponentFixture<SkiStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
