import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD002Component } from './ad002.component';

describe('AD002Component', () => {
  let component: AD002Component;
  let fixture: ComponentFixture<AD002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
