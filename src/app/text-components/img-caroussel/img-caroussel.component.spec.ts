import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarousselComponent } from './img-caroussel.component';

describe('ImgCarousselComponent', () => {
  let component: ImgCarousselComponent;
  let fixture: ComponentFixture<ImgCarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCarousselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
