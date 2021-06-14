import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD004Component } from './ad004.component';

describe('AD004Component', () => {
  let component: AD004Component;
  let fixture: ComponentFixture<AD004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
