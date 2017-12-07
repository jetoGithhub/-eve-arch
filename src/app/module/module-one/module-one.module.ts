import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EveLayout } from '../../eve-commons/eve-commons';
import { ModuleOneRoutingModule, ModuleOneComponent} from './router';

import { BcpComponents } from '@ngbcp/components';

@NgModule({
    imports: [
        BrowserModule,
        ModuleOneRoutingModule,
        BcpComponents
    ],
    exports: [
        ModuleOneComponent,
        ModuleOneRoutingModule
    ],
    declarations: [
        ModuleOneComponent
    ]
})

@EveLayout({
    location: 'sidebar',
    description: 'One Module',
    path: 'one-module'
})

export class ModuleOne {
    constructor() {
        console.log('module one init');
    }
}
