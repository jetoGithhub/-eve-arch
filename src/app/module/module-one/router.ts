import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'module-one-component',
    template: '<h3>Module one component route</h3><br /><test-component></test-component>'
})
export class ModuleOneComponent {
    constructor() {}
}

const routes: Routes = [
    { path: '', redirectTo: '/one-module', pathMatch: 'full' },
    { path: 'one-module',  component: ModuleOneComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class ModuleOneRoutingModule {

}
