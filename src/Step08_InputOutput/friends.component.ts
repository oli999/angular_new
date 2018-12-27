
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector:'friend-list',
	template:`
		<h3>친구 목록 입니다.</h3>
		<ul>
			<li *ngFor="let tmp of friends">{{tmp}}</li>
		</ul>
		<button (click)="emitGura()">gura 이벤트 발생 시키기</button>
	`
})
export class FriendsComponent{
	//필드 
	@Input('myFriends')
	friends:Array<string>;

	@Output('gura')
	emitter=new EventEmitter();

	//이벤트 발생 시키기 버튼을 눌렀을때 호출되는 메소드 
	emitGura(){
		//이벤트 발생 시키기
		this.emitter.emit('나는 구라다!');
	}
	
}