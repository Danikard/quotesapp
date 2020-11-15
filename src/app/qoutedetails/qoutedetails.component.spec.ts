import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutedetailsComponent } from './qoutedetails.component';

describe('QoutedetailsComponent', () => {
  let component: QoutedetailsComponent;
  let fixture: ComponentFixture<QoutedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QoutedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
