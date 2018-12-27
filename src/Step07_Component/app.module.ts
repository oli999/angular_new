import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// ngModel 을 사용하기 위해 
import {FormsModule} from '@angular/forms';

// YourComponent import 
import {YourComponent} from './your.component';
import {OurComponent} from './our.component';
@NgModule({
  declarations: [
    AppComponent, YourComponent, OurComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
