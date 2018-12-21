import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //컨트롤러 역활 
	//다양한 모델이 있을수 있다.
	title:string='AngularJs';
	nums:number[]=[10,20,30];
	friends:string[]=['김구라','해골','원숭이'];
	person:object={num:1, name:'김구라', addr:'노량진'};
	myCar:Car=new Car('소나타', 'white');
	cars:Array<Car>=[
		new Car('소나타','white'),
		new Car('프라이드', 'blue'),
		new Car('레이', 'black')
	];
}

//사용자 정의 클래스 
class Car{
	constructor(public name:string, public color:string){}
}














