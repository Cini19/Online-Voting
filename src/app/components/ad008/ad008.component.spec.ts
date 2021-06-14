import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD008Component } from './ad008.component';

describe('AD008Component', () => {
  let component: AD008Component;
  let fixture: ComponentFixture<AD008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
