import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// you need to add the module over here by importing from angular library and you have to add it as import metadata of NgModule 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatadisplayComponent } from './datadisplay/datadisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    DatadisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
