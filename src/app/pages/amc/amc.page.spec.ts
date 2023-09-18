import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AMCPage } from './amc.page';

describe('AMCPage', () => {
  let component: AMCPage;
  let fixture: ComponentFixture<AMCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AMCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
