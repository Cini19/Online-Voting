import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EO002Component } from './eo002.component';

describe('EO002Component', () => {
  let component: EO002Component;
  let fixture: ComponentFixture<EO002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EO002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EO002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
