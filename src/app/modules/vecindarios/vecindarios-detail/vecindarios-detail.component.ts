import { Component, Input, OnInit } from '@angular/core';
import { Vecindario } from '../vecindario';

@Component({
  selector: 'app-vecindarios-detail',
  templateUrl: './vecindarios-detail.component.html',
  styleUrls: ['./vecindarios-detail.component.css']
})
export class VecindariosDetailComponent implements OnInit {

  @Input() vecindarioDetail!: Vecindario;
  constructor() { }

  ngOnInit() {
  }

}
