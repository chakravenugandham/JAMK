import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentselectionComponent } from './restaurentselection.component';

describe('RestaurentselectionComponent', () => {
  let component: RestaurentselectionComponent;
  let fixture: ComponentFixture<RestaurentselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
