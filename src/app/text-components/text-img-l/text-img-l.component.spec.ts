import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImgLComponent } from './text-img-l.component';

describe('TextImgLComponent', () => {
  let component: TextImgLComponent;
  let fixture: ComponentFixture<TextImgLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextImgLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImgLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
