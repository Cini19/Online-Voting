import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD007Component } from './ad007.component';

describe('AD007Component', () => {
  let component: AD007Component;
  let fixture: ComponentFixture<AD007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
