import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageDataComponent } from './mortgage-data.component';

describe('MortgageDataComponent', () => {
  let component: MortgageDataComponent;
  let fixture: ComponentFixture<MortgageDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
