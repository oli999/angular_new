//my.component.ts

import {Component} from '@angular/core';
import {FortuneService} from './fortune.service';
@Component({
	selector:'my-area',
	template:`
		<h3>my component 의 운세</h3>
		<p>오늘의 운세: <strong>{{fortuneToday}}</strong></p>
	`
})
export class MyComponent{
	fortuneToday:string;
	constructor(private fService:FortuneService){
		this.fortuneToday=fService.getFortune();
	}
}