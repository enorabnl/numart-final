import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImgRComponent } from './text-img-r.component';

describe('TextImgRComponent', () => {
  let component: TextImgRComponent;
  let fixture: ComponentFixture<TextImgRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextImgRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImgRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
