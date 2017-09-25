import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

@Component({
    selector:"module-two-component",
    template:"<h3>Module Two component route</h3>"
})
export class ModuleTwoComponent{
    constructor(){}
}

const routes: Routes = [
    { path: 'two-module',  component: ModuleTwoComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class ModuleTwoRoutingModule {

}