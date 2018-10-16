import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsUpdateComponent } from './employee-details-update.component';

describe('EmployeeDetailsUpdateComponent', () => {
  let component: EmployeeDetailsUpdateComponent;
  let fixture: ComponentFixture<EmployeeDetailsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
