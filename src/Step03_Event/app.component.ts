import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //컨트롤러 역활 
	//모델
	clickCount:number=0;
	inputMsg:string='';
	isChecked:boolean=false;
	msg:string='';
	greeting:string='';
	//버튼을 눌렀을때 호출되는 메소드
	btnClicked(){
		alert("버튼을 눌렀네여?");
	}
	//input 요소에 keyup 이벤트가 발생했을때 호출되는 메소드
	keyUpped(event){
		/*
			event => 발생한 event 객체
			event.target => 이벤트가 발생된 객체 (input 요소)
			event.target.value => 이벤트가 발생된 객체에 입력된 value 값 
		*/
		this.inputMsg=event.target.value;
	}
}















