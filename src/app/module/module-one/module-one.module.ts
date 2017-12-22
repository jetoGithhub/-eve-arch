import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EveLayout } from '../../eve-commons/eve-commons';
import { ModuleOneRoutingModule, ModuleOneComponent} from './router';

import { BcpComponents } from '@bcp/components';
import { storage } from '@bcp/core';

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

        console.log('local', storage('local'));
        console.log('session', storage('session'));
        console.log('memory', storage('memory'));
    }
}
