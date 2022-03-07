import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnwesComponent } from './viewnwes.component';

describe('ViewnwesComponent', () => {
  let component: ViewnwesComponent;
  let fixture: ComponentFixture<ViewnwesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnwesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnwesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
