import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppheaderproductComponent } from './appheaderproduct.component';

describe('AppheaderproductComponent', () => {
  let component: AppheaderproductComponent;
  let fixture: ComponentFixture<AppheaderproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppheaderproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppheaderproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
