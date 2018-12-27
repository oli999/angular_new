
import {Component} from '@angular/core';

@Component({
	selector:'login-form',
	templateUrl:'./login-form.component.html'
})
export class LoginFormComponent{
	//폼에 입력한 내용을 저장할 필드 
	loginInfo={id:'', pwd:''};
	//폼 제출 이벤트가 발생했을때 호출되는 메소드
	onSubmit(){
		alert("로그인 되었습니다.");
	}
}