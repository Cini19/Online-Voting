import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD009Component } from './ad009.component';

describe('AD009Component', () => {
  let component: AD009Component;
  let fixture: ComponentFixture<AD009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
