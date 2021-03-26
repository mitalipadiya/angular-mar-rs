import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalsFormComponent } from './verticals-form.component';

describe('VerticalsFormComponent', () => {
  let component: VerticalsFormComponent;
  let fixture: ComponentFixture<VerticalsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
