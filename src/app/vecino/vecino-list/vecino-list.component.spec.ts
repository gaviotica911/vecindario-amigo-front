/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VecinoListComponent } from './vecino-list.component';

describe('VecinoListComponent', () => {
  let component: VecinoListComponent;
  let fixture: ComponentFixture<VecinoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VecinoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VecinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
