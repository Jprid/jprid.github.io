import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TagListService } from '../tag-list.service';
import { PositionTagContainerComponent } from './position-tag-container.component';

describe('PositionTagContainerComponent', () => {
  let component: PositionTagContainerComponent;
  let fixture: ComponentFixture<PositionTagContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionTagContainerComponent ],
      providers: [TagListService]
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

  it('should only have tagModels corresponding to those tags which were input', () => {
      const tags = ['dongle', 'shbips'];
      component.tags = tags;
      fixture.detectChanges();
      expect(component.tagModels.map(x => x[0])).toEqual(tags);
  });
});
