import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonTutorialComponent } from './button-tutorial/button-tutorial.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonTutorialComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
