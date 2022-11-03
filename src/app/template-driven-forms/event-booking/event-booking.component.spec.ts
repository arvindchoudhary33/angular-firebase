import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingComponent } from './event-booking.component';

describe('EventBookingComponent', () => {
  let component: EventBookingComponent;
  let fixture: ComponentFixture<EventBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
