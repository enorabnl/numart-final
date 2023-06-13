import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sketch1Component } from './sketch1.component';

describe('Sketch1Component', () => {
  let component: Sketch1Component;
  let fixture: ComponentFixture<Sketch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sketch1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sketch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
