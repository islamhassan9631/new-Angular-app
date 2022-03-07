import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnwesComponent } from './addnwes.component';

describe('AddnwesComponent', () => {
  let component: AddnwesComponent;
  let fixture: ComponentFixture<AddnwesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnwesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnwesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
