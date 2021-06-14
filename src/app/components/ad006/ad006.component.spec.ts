import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AD006Component } from './ad006.component';

describe('AD006Component', () => {
  let component: AD006Component;
  let fixture: ComponentFixture<AD006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AD006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AD006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
