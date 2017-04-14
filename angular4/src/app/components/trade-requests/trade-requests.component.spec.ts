import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeRequestsComponent } from './trade-requests.component';

describe('TradeRequestsComponent', () => {
  let component: TradeRequestsComponent;
  let fixture: ComponentFixture<TradeRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
