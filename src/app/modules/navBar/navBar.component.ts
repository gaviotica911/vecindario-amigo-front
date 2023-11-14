import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {
  displayGruposList: boolean = false;

  constructor() { }
  showVecindariosList(): void {
    this.displayGruposList = true;
  }
  ngOnInit() {
  }

}
