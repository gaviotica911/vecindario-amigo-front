import { Component, Input, OnInit } from '@angular/core';
import { Vecino } from '../vecino';
import { VecinoDetail } from '../vecino-detail';
import { PublicacionDetail } from '../../publicacion/publicacion-detail';

@Component({
  selector: 'app-vecino-detail',
  templateUrl: './vecino-detail.component.html',
  styleUrls: ['./vecino-detail.component.css']
})
export class VecinoDetailComponent implements OnInit {
  posts: Array<PublicacionDetail> = [];
  selectedPost!: PublicacionDetail;
  selected: Boolean = false;

  onSelected(post: PublicacionDetail): void {
    this.selected = true;
    this.selectedPost = post;
  }

  
  @Input() vecinoDetail!: VecinoDetail;

  constructor() { }

  ngOnInit() {
  }

}
