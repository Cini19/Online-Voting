import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD001Component } from './ad001.component';

describe('AD001Component', () => {
  let component: AD001Component;
  let fixture: ComponentFixture<AD001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
