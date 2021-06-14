import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { US003Component } from './us003.component';

describe('US003Component', () => {
  let component: US003Component;
  let fixture: ComponentFixture<US003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ US003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(US003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
