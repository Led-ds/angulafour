import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentizando2Component } from './componentizando2.component';

describe('Componentizando2Component', () => {
  let component: Componentizando2Component;
  let fixture: ComponentFixture<Componentizando2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componentizando2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componentizando2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
