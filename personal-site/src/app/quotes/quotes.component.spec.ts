import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, ParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { QuotesComponent } from './quotes.component';
export class MockActivatedRoute {
  public createParamMap(startIndex: number, endIndex: number)
  {
    this.params = of(convertToParamMap({'startIndex': startIndex, 'endIndex': endIndex}));
  }
  public params: Observable<ParamMap>;
}

class MockRouter {
  public navigateByUrl(url:string) {
    return url;
  }
}
describe('QuotesComponent', () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;
  let activatedRouteMock: MockActivatedRoute;
  let mockRouter: MockRouter;
  let numQuotesToDisplay = 10;
  beforeEach(async () => {
    activatedRouteMock = new MockActivatedRoute();
    mockRouter = new MockRouter();
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'quotes', redirectTo: 'quotes/0/10', pathMatch: 'prefix'},
          {path: 'quotes/:startIndex/:endIndex', component: QuotesComponent, pathMatch: 'prefix'}]
        )
      ],
      declarations: [ QuotesComponent ],
      providers: [{provide: Router, useValue: mockRouter}, { provide: ActivatedRoute,             useValue: activatedRouteMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.componentInstance;
    activatedRouteMock.createParamMap(0, 10);
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Forward button should have the right message on initialization', () => {
    expect(component.nextMessage).toEqual(`Next ${numQuotesToDisplay} Quotes`);
  });

  it('Should display home in back button text on navigation to quotes page', () => {
    expect(component.backMessage).toEqual('Home');
  });

  it('Back button text should update on navigation away from first quotes page', () => {
    component.getNextSetOfQuotes();
    //activatedRouteMock.createParamMap(component.startIndex, component.endIndex);
    TestBed.createComponent(QuotesComponent);
    const newComponent = fixture.componentInstance;
    expect(newComponent.backMessage).toEqual(`Go Back ${numQuotesToDisplay} Quotes`);
  });

  it('Should not let users navigate past the total number of quotes', () => {
    expect(true);
  });
});
