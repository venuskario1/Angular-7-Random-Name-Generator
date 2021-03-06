import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NamesComponent } from './names/names.component';
import { SharedComponent } from './shared/shared.component';
import { NavComponent } from './shared/nav/nav.component';
import { RandomNameComponent } from './names/randomname/randomname.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NamesComponent,
    SharedComponent,
    NavComponent,
    RandomNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
