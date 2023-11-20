/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VecinoDetailComponent } from './vecino-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Vecindario } from '../../vecindarios/vecindario';
import { faker } from '@faker-js/faker';
import { VecinoDetail } from '../vecino-detail';
import { Publicacion} from '../../publicacion/publicacion';
import { Vecino } from '../vecino';

describe('VecinoDetailComponent', () => {
  let component: VecinoDetailComponent;
  let fixture: ComponentFixture<VecinoDetailComponent>;
  let debug: DebugElement;
  let publicacionesSize: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ VecinoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VecinoDetailComponent);
    component = fixture.componentInstance;
    publicacionesSize = 3;

    let vecindario = new Vecindario(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    let vecino= new Vecino(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      vecindario
    );
    let posts = Array(publicacionesSize);
    for (let i = 0; i < publicacionesSize; i++) {
      posts[i] = new Publicacion(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        vecino
      );
    }

    component.vecinoDetail= new VecinoDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        vecindario,
        posts,
    []
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p.h3.p-3 element with vecinoDetail.nombre', () => {
    const element: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
    expect(element.textContent).toContain(component.vecinoDetail.nombre);
  });

  it('should have an img element with alt= vecinoDetail.nombre', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.vecinoDetail.nombre
    );
  });

  it('should have an img element with src= vecinoDetail.profilePic', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.vecinoDetail.profilePic
    );
  });

  it('should have 3(Publicacion) <a> elements', () => {
    expect(debug.queryAll(By.css('dd.caption > a')).length == 3).toBeTrue();
  });

  it('should have a routerLink=/publicaciones/publicacion.id for each publicacion', () => {
    for (let i = 0; i < publicacionesSize; i++) {
      expect(debug.queryAll(By.css('a'))[i].attributes['ng-reflect-router-link'])
      .toContain('/publicaciones/' + component.vecinoDetail.publicaciones[i].id);
    }
  });


  it('should have one dd tag for component.vecinoDetail.descripcion', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'descripcion';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.vecinoDetail.descripcion);
  });

  it('should have one dd tag for component.vecinoDetail.edad', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'edad';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.vecinoDetail.edad);
  });

  it('should have one dd tag for component.vecinoDetail.vecindario.name', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    let nodo = allDt.find((value) => {
      return value.nativeElement.textContent == 'Vecindario';
    });
    expect(nodo?.nativeElement.nextSibling.textContent).toContain(component.vecinoDetail.vecindario.nombre);
  });



});
