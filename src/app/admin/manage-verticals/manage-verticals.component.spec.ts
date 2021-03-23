import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVerticalsComponent } from './manage-verticals.component';

describe('ManageVerticalsComponent', () => {
  let component: ManageVerticalsComponent;
  let fixture: ComponentFixture<ManageVerticalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVerticalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVerticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
