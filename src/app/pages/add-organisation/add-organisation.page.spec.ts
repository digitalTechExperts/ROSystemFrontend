import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddOrganisationPage } from './add-organisation.page';

describe('AddOrganisationPage', () => {
  let component: AddOrganisationPage;
  let fixture: ComponentFixture<AddOrganisationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddOrganisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
