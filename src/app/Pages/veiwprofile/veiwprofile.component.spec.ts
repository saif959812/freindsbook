import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwprofileComponent } from './veiwprofile.component';

describe('VeiwprofileComponent', () => {
  let component: VeiwprofileComponent;
  let fixture: ComponentFixture<VeiwprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
