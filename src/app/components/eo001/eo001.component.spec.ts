import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EO001Component } from './eo001.component';

describe('EO001Component', () => {
  let component: EO001Component;
  let fixture: ComponentFixture<EO001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EO001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EO001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
