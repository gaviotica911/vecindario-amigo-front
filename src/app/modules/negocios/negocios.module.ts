import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegociosListComponent } from './negocios-list/negocios-list.component';
import { NegocioDetailComponent } from './negocios-detail/negocios-detail.component';
import { NegociosComponent } from './negocios.component';

import { ComentarioModule } from "../comentario/comentario.module";
import { Publicacion } from '../publicacion/publicacion';
import { PublicacionModule } from '../publicacion/publicacion.module';



@NgModule({
    declarations: [NegociosListComponent, NegocioDetailComponent, NegociosComponent],
    exports: [NegociosListComponent, NegociosComponent],
    imports: [
        CommonModule, 
        ComentarioModule,PublicacionModule
    ]
})
export class NegocioModule { }
