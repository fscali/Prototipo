import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [SettingsComponent],
  exports: [SettingsComponent]

})
export class SettingsModule { }
