import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EquiationComponent } from './equiation/equiation.component';
import { AnswerHighlightDirective } from './answer-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EquiationComponent,
    AnswerHighlightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
