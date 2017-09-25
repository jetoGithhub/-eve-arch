import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EveLayout } from "../../eve-commons/eve-commons";
import { ModuleOneRoutingModule, ModuleOneComponent} from "./router";

@NgModule({
    imports: [
        BrowserModule,
        ModuleOneRoutingModule
    ],
    declarations: [
        ModuleOneComponent
    ]
})

@EveLayout({
    location:'sidebar',
    description:'One Module',
    path:'one-module'
})

export class ModuleOne{
    constructor(){
        console.log('module one init');
    }
}