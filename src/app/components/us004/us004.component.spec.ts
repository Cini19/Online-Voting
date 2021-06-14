import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { US004Component } from './us004.component';

describe('US004Component', () => {
  let component: US004Component;
  let fixture: ComponentFixture<US004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ US004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(US004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
