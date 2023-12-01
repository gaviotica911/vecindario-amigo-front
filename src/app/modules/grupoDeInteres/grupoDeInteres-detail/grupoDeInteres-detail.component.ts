import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrupoDeInteresDetail } from '../grupoDeInteres-detail';
import { GrupoDeInteresService } from '../grupoDeInteres.service';
import { GrupoDeInteres } from '../grupoDeInteres';

@Component({
  selector: 'app-grupoDeInteres-detail',
  templateUrl: './grupoDeInteres-detail.component.html',
  styleUrls: ['./grupoDeInteres-detail.component.css']
})
export class GrupoDeInteresDetailComponent implements OnInit {

  grupoDeInteresId!: string;
  @Input() grupoDeInteresDetail!: GrupoDeInteresDetail;

  constructor(
    private route: ActivatedRoute,
    private grupoDeInteresService: GrupoDeInteresService
  ) {}
  getAuthor(){
    this.grupoDeInteresService.getGrupoDeInteres(this.grupoDeInteresId).subscribe(apiData=>{
      this.grupoDeInteresDetail = apiData;
    })
  }

  ngOnInit() {
    if(this.grupoDeInteresDetail === undefined){
      this.grupoDeInteresId = this.route.snapshot.paramMap.get('id')!
      if (this.grupoDeInteresId) {
        this.getAuthor();
      }
    }

    
  }

}
