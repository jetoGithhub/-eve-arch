import { Component } from '@angular/core';
import { EveSidebar } from '../../eve-commons/eve-commons';

@Component({
  selector: 'eve-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [
    EveSidebar
  ]
})

export class SidebarComponent {
  lists = [];
  constructor(sidebar: EveSidebar) {
    this.lists = sidebar.getItems();
    console.log('sidebar', this.lists);
  }
}
