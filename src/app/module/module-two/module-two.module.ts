import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EveLayout } from '../../eve-commons/eve-commons';
import { ModuleTwoRoutingModule, ModuleTwoComponent } from './router';

@NgModule({
    imports: [
        BrowserModule,
        ModuleTwoRoutingModule
    ],
    exports: [
        ModuleTwoComponent,
        ModuleTwoRoutingModule
    ],
    declarations: [
        ModuleTwoComponent
    ]
})

@EveLayout({
    location: 'navbar',
    description: 'Two Module',
    path: 'two-module'
})

export class ModuleTwo {
    constructor() {
        console.log('module two init');
    }
}
