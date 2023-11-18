import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecinoListComponent } from './vecino-list/vecino-list.component';
import { VecinoDetailComponent } from './vecino-detail/vecino-detail.component';
import { vecinoComponent } from './vecino.component';

import { ComentarioModule } from "../comentario/comentario.module";
import { Publicacion } from '../publicacion/publicacion';
import { PublicacionModule } from '../publicacion/publicacion.module';



@NgModule({
    declarations: [VecinoListComponent, VecinoDetailComponent, vecinoComponent],
    exports: [VecinoListComponent, vecinoComponent],
    imports: [
        CommonModule, 
        ComentarioModule,PublicacionModule
    ]
})
export class VecinoModule { }
