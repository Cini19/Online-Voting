import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { US007Component } from './us007.component';

describe('US007Component', () => {
  let component: US007Component;
  let fixture: ComponentFixture<US007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ US007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(US007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
