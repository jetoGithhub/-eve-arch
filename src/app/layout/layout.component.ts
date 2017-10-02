import { Component } from '@angular/core';
import { EveNavbar } from '../eve-commons/eve-commons';

@Component({
    selector:'eve-navbar',
    template:"<div style='width: 100%; height:64px; top:0;border-bottom: 1px solid black'>" +
            "<span *ngFor='let list of lists' " +
                   "style='color: white; background: black; padding: 4px;margin-right: 5px'>" +
            "<a routerLink='/{{list.path}}'>{{list.description}}</a>" +
        "</span>&nbsp;&nbsp;&nbsp;&nbsp;" +
    "</div>"
})

export class NavBarComponent {
    lists = [];
    constructor() {
        const ENavbar = new EveNavbar();
        this.lists = ENavbar.getItems();
        console.log('NAVBAR', this.lists);
    }
}

@Component({
    selector:'eve-layout',
    template:"<ng-content></ng-content>"
})

export class LayoutComponent{

    constructor(){
        console.log('layout.module init');
    }
}
