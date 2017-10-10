import { Component } from '@angular/core';
import { LayoutController } from '../../eve-commons/eve-commons';

@Component({
  selector: 'eve-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [
    LayoutController
  ]
})

export class NavBarComponent {
  lists = [];
  constructor( private layoutCtrl: LayoutController ) {
    this.lists = this.layoutCtrl.getItems('navbar');
    console.log('navbar', this.lists);
  }
}
