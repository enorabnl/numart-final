import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLongComponent } from './text-long.component';

describe('TextLongComponent', () => {
  let component: TextLongComponent;
  let fixture: ComponentFixture<TextLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
