import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavbarComponent } from './side-navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('SideNavbarComponent', () => {
  let component: SideNavbarComponent;
  let fixture: ComponentFixture<SideNavbarComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavbarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
