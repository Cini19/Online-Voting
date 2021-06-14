import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { US006Component } from './us006.component';

describe('US006Component', () => {
  let component: US006Component;
  let fixture: ComponentFixture<US006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ US006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(US006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
