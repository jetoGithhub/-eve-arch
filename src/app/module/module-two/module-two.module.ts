import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EveLayout } from "../../eve-commons/eve-commons";

@NgModule({
    imports: [
        BrowserModule,
    ],
})

@EveLayout({
    location:'navbar',
    description:'Two Module',
    path:'two-module'
})

export class ModuleTwo{
    constructor(){
        console.log('module two init');
    }
}