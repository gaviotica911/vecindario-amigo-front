import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VecinoListComponent } from './vecino-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Vecindario } from '../../vecindarios/vecindario';
import { Vecino } from '../vecino';
import { VecinoService } from '../vecino.service';
import { VecinoDetail } from '../vecino-detail';

describe('VecinoListComponent', () => {
 let component: VecinoListComponent;
 let fixture: ComponentFixture<VecinoListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ VecinoListComponent ],
     providers: [ VecinoService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(VecinoListComponent);
   component = fixture.componentInstance;

   const vecindario = new Vecindario(
     faker.datatype.number(),
     faker.lorem.sentence(),
     faker.lorem.sentence(),
     faker.lorem.sentence(),

   );

   for(let i = 0; i < 10; i++) {
     const vecino = new VecinoDetail(
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.image.imageUrl(),
       vecindario,
       []
     );
     component.vecinos.push(vecino);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have 10 <div.col.mb-2> elements', () => {
   expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
 });

 it('should have 10 <card.p-2> elements', () => {
   expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
 });

 it('should have 10 <img> elements', () => {
   expect(debug.queryAll(By.css('img'))).toHaveSize(10)
 });

 it('should have 10 <div.card-body> elements', () => {
   expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
 });

 it('should have the corresponding src to the Vecino image and alt to the Vecino name', () => {
   debug.queryAll(By.css('img')).forEach((img, i)=>{
     expect(img.attributes['src']).toEqual(
       component.vecinos[i].profilePic)

     expect(img.attributes['alt']).toEqual(
       component.vecinos[i].nombre)
   })
 });

 it('should have h5 tag with the Vecino.name', () => {
   debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
     expect(h5.nativeElement.textContent).toContain(component.vecinos[i].nombre)
   });
 });

 it('should have p tag with the Vecino.vecindario.name', () => {
   debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
     expect(p.nativeElement.textContent).toContain(component.vecinos[i].vecindario.nombre)
   });
 });

 it('should have 9 <div.col.mb-2> elements and the deleted Vecino should not exist', () => {
   const Vecino = component.vecinos.pop()!;
   fixture.detectChanges();
   expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)

   debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
     expect(selector.nativeElement.textContent).not.toContain(Vecino.nombre);
   });
 });

});