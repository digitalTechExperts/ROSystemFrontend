import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddComplaintsPage } from './add-complaints.page';

describe('AddComplaintsPage', () => {
  let component: AddComplaintsPage;
  let fixture: ComponentFixture<AddComplaintsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
