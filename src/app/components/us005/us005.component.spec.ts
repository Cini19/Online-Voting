import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { US005Component } from './us005.component';

describe('US005Component', () => {
  let component: US005Component;
  let fixture: ComponentFixture<US005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ US005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(US005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
