// signup-form.component.ts

import {Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector:'signup-form',
	templateUrl:'./signup-form.component.html'
})
export class SignupFormComponent{
	@Output('signupSuccess')
	successEmitter=new EventEmitter();

	//폼에 입력한 내용을 저장할 필드 
	model={id:"", pwd:"", email:""};
	
	onSubmit(){
		alert("가입 되었습니다.");
		//이벤트 발생 시키기  
		this.successEmitter.emit();
	}	
}