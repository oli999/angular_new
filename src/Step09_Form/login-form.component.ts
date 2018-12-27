
import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
	selector:'login-form',
	templateUrl:'./login-form.component.html'
})
export class LoginFormComponent implements OnInit{
	//폼에 입력한 내용을 저장할 필드 
	loginInfo={id:'', pwd:''};
	@Output('loginSuccess')
	successEmitter=new EventEmitter();
	//생성자
	constructor(){
		//객체가 생성되는 시점에 호출되는 생성자
		console.log("LoginFormComponent constructor()");
	}

	// 인터 페이스 때문에 강제 구현된 메소드 
	ngOnInit(){
		//컴포넌트가 사용준비가 된후에 호출되는 메소드 
		console.log("ngOnInit()");
	}

	//폼 제출 이벤트가 발생했을때 호출되는 메소드
	onSubmit(){
		alert("로그인 되었습니다.");
		this.successEmitter.emit();
	}
}