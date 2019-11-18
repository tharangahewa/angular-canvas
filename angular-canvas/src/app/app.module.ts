import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { AngularDraggableModule } from "angular2-draggable";
import { GenericObjectComponent } from './canvas/generic-object/generic-object.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    GenericObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
