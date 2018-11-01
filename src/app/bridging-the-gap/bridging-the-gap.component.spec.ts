import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgingTheGapComponent } from './bridging-the-gap.component';

describe('BridgingTheGapComponent', () => {
  let component: BridgingTheGapComponent;
  let fixture: ComponentFixture<BridgingTheGapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgingTheGapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgingTheGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
