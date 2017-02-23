import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import 'hammerjs';
import { GalleryModule } from './gallery/gallery.module';

import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    GalleryModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
