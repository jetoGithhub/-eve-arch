import { Component } from '@angular/core';
import { EveSidebar, EveNavbar } from '../eve-commons/eve-commons';

@Component({
    selector:'eve-sidebar',
    template:"<div class='container' " +
    "style='    width: auto;height: 100%;top:73px; bottom: 0;position: absolute;border-right: 1px solid black;padding: 0 14px 0'>" +
    "<ul>" +
    "<li *ngFor='let list of lists'>" +
    "<a routerLink='/{{list.path}}'>{{list.description}}</a>" +
    "</li>" +
    "</ul>"+
    "</div>"
})

export class SidebarComponent{
    lists = [];
    constructor(){
        let ESidebar = new EveSidebar();
        this.lists = ESidebar.getItems();
        console.log('sidebar', this.lists);
    }
}

@Component({
    selector:'eve-navbar',
    template:"<div style='width: 100%; height:64px; top:0;border-bottom: 1px solid black'>" +
            "<span *ngFor='let list of lists' " +
                   "style='color: white; background: black; padding: 4px;margin-right: 5px'>" +
            "<a routerLink='/{{list.path}}'>{{list.description}}</a>" +
        "</span>&nbsp;&nbsp;&nbsp;&nbsp;" +
    "</div>"
})

export class NavBarComponent{
    lists = [];
    constructor(){
        let ENavbar = new EveNavbar();
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