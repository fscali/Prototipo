import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule { }
