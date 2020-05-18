import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [ NavComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CoreRoutingModule,
    HttpClientModule,

  ],
  exports: [CommonModule, BrowserModule, RouterModule, NavComponent, FooterComponent]
})
export class CoreModule { }
