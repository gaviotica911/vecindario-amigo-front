import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ZonaVerdeListComponent } from './zonaVerde-list.component';
import { HttpClientModule } from '@angular/common/http';

import { ZonaVerde } from '../zonaVerde';
import { ZonaVerdeService } from '../zonaVerde.service';
import { Vecindario } from '../../vecindarios/vecindario';

describe('ZonaVerdeListComponent', () => {
 let component: ZonaVerdeListComponent;
 let fixture: ComponentFixture<ZonaVerdeListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ ZonaVerdeListComponent ],
     providers: [ ZonaVerdeService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ZonaVerdeListComponent);
   component = fixture.componentInstance;

   let vecindario = new Vecindario(
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence()
  );

   for(let i = 0; i < 10; i++) {
     const zonaVerde = new ZonaVerde(
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.datatype.number(),
       
       vecindario,
     );
     component.zonasVerdes.push(zonaVerde);
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

 it('should have the corresponding src to the  zonasVerdes name', () => {
  debug.queryAll(By.css('img')).forEach((img, i)=>{
     expect(img.attributes['alt']).toEqual(
       component.zonasVerdes[i].nombre)
   })
 });

 it('should have h5 tag with the zonasVerdes.nombre', () => {
   debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
     expect(h5.nativeElement.textContent).toContain(component.zonasVerdes[i].nombre)
   });
 });

 it('should have p tag with the zonasVerdes.vecindario.nombre', () => {
   debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
     expect(p.nativeElement.textContent).toContain(component.zonasVerdes[i].vecindario.nombre)
   });
 });

 it('should have 9 <div.col.mb-2> elements and the deleted zonasVerdes should not exist', () => {
   const ZonaVerde = component.zonasVerdes.pop()!;
   fixture.detectChanges();
   expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)

   debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
     expect(selector.nativeElement.textContent).not.toContain(ZonaVerde.nombre);
   });
 });

});