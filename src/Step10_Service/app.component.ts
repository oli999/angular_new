import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {FortuneService} from './fortune.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{ //컨트롤러 역활 
	//오늘의 운세
	fortuneToday:string;
	/*
		생성자에 주입받고 싶은 서비스의 type 을 명시하면
		자동 주입된다.
	*/
	constructor(private fService:FortuneService){

	}
	//컴포넌트가 준비 완료 되었을때 호출되는 메소드 
	ngOnInit(){
		//서비스를 이용해서 오늘의 운세를 얻어와서 필드에 대입 
		this.fortuneToday=this.fService.getFortune();
	}
}















