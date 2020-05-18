import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeEditComponent } from './shape-edit.component';

describe('ShapeEditComponent', () => {
  let component: ShapeEditComponent;
  let fixture: ComponentFixture<ShapeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
