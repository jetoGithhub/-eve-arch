import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';

import { ModuleManager } from './eve-commons/eve-commons';

import { ModuleOne } from './module/module-one/module-one.module';
import { ModuleTwo } from './module/module-two/module-two.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { BcpComponents } from '@ngbcp/components';


console.log(ModuleManager.publish([]));

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    NavBarComponent,
  ],
  exports: [
    NgForOf,
    BcpComponents,
  ],
  imports: [
    BrowserModule,
    BcpComponents,
    ModuleOne,
    ModuleTwo,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('app.module init', '\n', this);
  }
}
