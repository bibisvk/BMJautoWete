import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AutoFormularComponent } from './auto-formular/auto-formular.component';
import { AutoStrankaComponent } from './auto-stranka/auto-stranka.component';
import { AutaZoznamComponent } from './auta-zoznam/auta-zoznam.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { AutaKontrolaComponent } from './auta-kontrola/auta-kontrola.component';
import { CustomersFormularComponent } from './customers-formular/customers-formular.component';
import { CustomersZoznamComponent } from './customers-zoznam/customers-zoznam.component';
import { CustomersStrankaComponent } from './customers-stranka/customers-stranka.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AutoFormularComponent,
    AutoStrankaComponent,
    AutaZoznamComponent,
    MenuComponent,
    AutaKontrolaComponent,
    CustomersFormularComponent,
    CustomersZoznamComponent,
    CustomersStrankaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
