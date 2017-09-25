import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';

import { ModuleOne } from './module/module-one/module-one.module';
import { ModuleTwo } from './module/module-two/module-two.module';

import { AppComponent } from './app.component';
import { LayoutComponent, SidebarComponent, NavBarComponent } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    NavBarComponent      
  ],
  exports:[
    NgForOf
  ],
  imports: [
    BrowserModule,
    ModuleOne,
    ModuleTwo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('app.module init','\n', this);
  }
}
