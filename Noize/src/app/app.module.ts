
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {BandDetailComponent} from './band-detail.component'
import {BandsWidgetComponent} from './bands-widget.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BandDetailComponent,
    BandsWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
