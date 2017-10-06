import { Component } from '@angular/core';

@Component({
    selector: 'eve-layout',
    template: `<ng-content></ng-content>`
})

export class LayoutComponent {

    constructor() {
        console.log('layout.module init');
    }
}
