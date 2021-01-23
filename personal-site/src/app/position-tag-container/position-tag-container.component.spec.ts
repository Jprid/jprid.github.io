import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PositionTagContainerComponent } from './position-tag-container.component';

describe('PositionTagContainerComponent', () => {
  let component: PositionTagContainerComponent;
  let fixture: ComponentFixture<PositionTagContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionTagContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTagContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
