import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CentroComercialListComponent } from './centro-comercial-list.component'; // Assuming the correct path
import { HttpClientModule } from '@angular/common/http';

describe('CentroComercialListComponent', () => {
  let component: CentroComercialListComponent;
  let fixture: ComponentFixture<CentroComercialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CentroComercialListComponent] // Assuming the correct component name
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroComercialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});