// centro-comercial-list.component.spec.ts

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CentroComercialListComponent } from './centro-comercial-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Vecindario } from 'app/modules/vecindarios/vecindario';


import { CentroComercial } from '../centroComercial';
import { CentroComercialService } from '../centroComercial.service';
import { CentroComercialDetail } from '../centro-comercial-detail';

describe('CentroComercialListComponent', () => {
 let component: CentroComercialListComponent;
 let fixture: ComponentFixture<CentroComercialListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ CentroComercialListComponent ],
     providers: [ CentroComercialService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(CentroComercialListComponent);
   component = fixture.componentInstance;

   const vecindario = new Vecindario(
     faker.datatype.number(),
     faker.lorem.sentence(),
     faker.lorem.sentence(),
     faker.lorem.sentence(),
   );

   for (let i = 0; i < 10; i++) {
    const centroComercial = new CentroComercialDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      vecindario,
      []
    );
     component.centrosComerciales.push(centroComercial);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have 10 <div.col.mb-2> elements', () => {
   expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10);
 });

 it('should have 10 <card.p-2> elements', () => {
   expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10);
 });

 it('should have 10 <img> elements', () => {
   expect(debug.queryAll(By.css('img'))).toHaveSize(10);
 });

 it('should have 10 <div.card-body> elements', () => {
   expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10);
 });

 it('should have the corresponding src to the CentroComercial image and alt to the CentroComercial name', () => {
   debug.queryAll(By.css('img')).forEach((img, i) => {
     expect(img.attributes['src']).toEqual(component.centrosComerciales[i].imagen);
     expect(img.attributes['alt']).toEqual(component.centrosComerciales[i].nombre);
   });
 });

 it('should have h5 tag with the CentroComercial.name', () => {
   debug.queryAll(By.css('h5.card-title')).forEach((h5, i) => {
     expect(h5.nativeElement.textContent).toContain(component.centrosComerciales[i].nombre);
   });
 });

 it('should have p tag with the CentroComercial.vecindario.nombre', () => {
   debug.queryAll(By.css('p.card-text')).forEach((p, i) => {
     expect(p.nativeElement.textContent).toContain(component.centrosComerciales[i].vecindario.nombre);
   });
 });

 it('should have 9 <div.col.mb-2> elements and the deleted CentroComercial should not exist', () => {
   const deletedCentroComercial = component.centrosComerciales.pop()!;
   fixture.detectChanges();
   expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9);

   debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i) => {
     expect(selector.nativeElement.textContent).not.toContain(deletedCentroComercial.nombre);
   });
 });
});
