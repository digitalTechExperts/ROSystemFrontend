import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSalesPage } from './add-sales.page';

describe('AddSalesPage', () => {
  let component: AddSalesPage;
  let fixture: ComponentFixture<AddSalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
