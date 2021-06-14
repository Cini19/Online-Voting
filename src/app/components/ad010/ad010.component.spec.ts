import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD010Component } from './ad010.component';

describe('AD010Component', () => {
  let component: AD010Component;
  let fixture: ComponentFixture<AD010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
