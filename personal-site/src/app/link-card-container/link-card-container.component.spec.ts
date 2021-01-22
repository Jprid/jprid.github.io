import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCardContainerComponent } from './link-card-container.component';

describe('LinkCardContainerComponent', () => {
  let component: LinkCardContainerComponent;
  let fixture: ComponentFixture<LinkCardContainerComponent>;
  let icons: HTMLDivElement[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkCardContainerComponent);
    component = fixture.componentInstance;
    component.contacts = [{link: 'a', description: 'b', imgRef: 'dongle'}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contact cards should have transparent', () => {
    icons = fixture.nativeElement.querySelectorAll('.icon');
    icons.forEach(icon => {
      expect(icon.style.backgroundColor).toEqual('transparent');
    });
  });

  it('should respect the constrast flag', () => {
    component.contrast = true;
    fixture.detectChanges();
    icons = fixture.nativeElement.querySelectorAll('.icon');
    expect(icons.length).toBeGreaterThan(0);
    icons.forEach(icon => {
      expect(icon.style.backgroundColor).toEqual('var(--welcome-accent-color)');
    });
  });
});
