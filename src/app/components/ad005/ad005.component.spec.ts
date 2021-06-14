import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD005Component } from './ad005.component';

describe('AD005Component', () => {
  let component: AD005Component;
  let fixture: ComponentFixture<AD005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
