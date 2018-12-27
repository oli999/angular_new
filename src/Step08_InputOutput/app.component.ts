import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { //컨트롤러 역활 
	friends:Array<string>=['김구라','해골','원숭이'];
	
	onGura(e){
		console.log(e);
	}
}















