import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextShortComponent } from './text-short.component';

describe('TextShortComponent', () => {
  let component: TextShortComponent;
  let fixture: ComponentFixture<TextShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
