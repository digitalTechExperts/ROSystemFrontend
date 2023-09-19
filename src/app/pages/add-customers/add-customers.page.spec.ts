import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCustomersPage } from './add-customers.page';

describe('AddCustomersPage', () => {
  let component: AddCustomersPage;
  let fixture: ComponentFixture<AddCustomersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddCustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
