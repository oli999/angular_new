import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { //컨트롤러 역활 
	/*
		AppComponent 가 해석 하는 templete 에서 
		#five 가 붙어 있는 문서 객체의 참조값을 
		ElementRef type 으로 얻어와서 
		myInput 이라는 필드에 참조값 넣어주기  
	*/
	@ViewChild('five')
	myInput:ElementRef

	//버튼을 클릭했을때 호출되는 메소드(함수)
	fourClicked(elem){
		elem.value='four clicked!';
	}

	fiveClicked(){
		// this.myInput.nativeElement 는 input 요소의 참조값이다.
		this.myInput.nativeElement.value='five clicked!';
	}
}















