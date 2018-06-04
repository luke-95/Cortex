import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  MatToolbarModule,   //Toolbar
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';



@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,  //Material Toolbar
    MatCardModule      //Material Card Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
