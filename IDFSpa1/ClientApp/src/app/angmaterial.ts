import { MatButtonModule, MatSliderModule, MatProgressSpinnerModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatSliderModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatSliderModule, MatProgressSpinnerModule]
})

export class AngMaterialModule { }
