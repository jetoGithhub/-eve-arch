import { Component } from '@angular/core';
import { EveNavbar } from '../../eve-commons/eve-commons';

@Component({
  selector: 'eve-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [
    EveNavbar
  ]
})

export class NavBarComponent {
  lists = [];
  constructor( navbar: EveNavbar ) {
    this.lists = navbar.getItems();
    console.log('NAVBAR', this.lists);
  }
}
