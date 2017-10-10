import { Component } from '@angular/core';
import { LayoutController } from '../../eve-commons/eve-commons';

@Component({
  selector: 'eve-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [
    LayoutController
  ]
})

export class SidebarComponent {
  lists = [];
  constructor(private layoutCtrl: LayoutController) {
    this.lists = this.layoutCtrl.getItems('sidebar');
    console.log('sidebar', this.lists);
  }
}
