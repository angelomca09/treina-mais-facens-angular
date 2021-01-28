import { SharedModule } from './../shared-module/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLojistaComponent } from './ui-lojista.component';



@NgModule({
  declarations: [
    UiLojistaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UiLojistaModule { }
