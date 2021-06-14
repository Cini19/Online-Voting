import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD003Component } from './ad003.component';

describe('AD003Component', () => {
  let component: AD003Component;
  let fixture: ComponentFixture<AD003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
