import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsideVisitorsComponent } from './webside-visitors.component';

describe('WebsideVisitorsComponent', () => {
  let component: WebsideVisitorsComponent;
  let fixture: ComponentFixture<WebsideVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsideVisitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsideVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
