/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VecindariosListComponent } from './vecindarios-list.component';

describe('VecindariosListComponent', () => {
  let component: VecindariosListComponent;
  let fixture: ComponentFixture<VecindariosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VecindariosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VecindariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
