import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeAddComponent } from './shape-add.component';

describe('ShapeAddComponent', () => {
  let component: ShapeAddComponent;
  let fixture: ComponentFixture<ShapeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
