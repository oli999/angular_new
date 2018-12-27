import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// ngModel 을 사용하기 위해 
import {FormsModule} from '@angular/forms';
// 필요한 서비스 import
import {FortuneService} from './fortune.service';
import {MyComponent} from './my.component';
@NgModule({
  declarations: [
    AppComponent, MyComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [FortuneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
