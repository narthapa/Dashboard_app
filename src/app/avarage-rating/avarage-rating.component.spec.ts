import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvarageRatingComponent } from './avarage-rating.component';

describe('AvarageRatingComponent', () => {
  let component: AvarageRatingComponent;
  let fixture: ComponentFixture<AvarageRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvarageRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvarageRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
