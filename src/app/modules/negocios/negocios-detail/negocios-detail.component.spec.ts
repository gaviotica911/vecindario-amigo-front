/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NegocioDetailComponent } from './negocios-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Vecindario } from '../../vecindarios/vecindario';
import { faker } from '@faker-js/faker';
import { NegocioDetail } from '../negocios-detail';
import { Publicacion } from '../../publicacion/publicacion';
import { Negocio } from '../negocios';
import { NegociosListComponent } from '../negocios-list/negocios-list.component';

describe('NegocioDetailComponent', () => {
  let component: NegocioDetailComponent;
  let fixture: ComponentFixture<NegocioDetailComponent>;
  let debug: DebugElement;
  let publicacionesSize: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ NegocioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioDetailComponent);
    component = fixture.componentInstance;
    publicacionesSize = 3;

    let vecindario = new Vecindario(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    let negocio = new Negocio(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      vecindario
    );
    let posts = Array(publicacionesSize);
    

    component.negocioDetail = new NegocioDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      vecindario,
      posts
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
