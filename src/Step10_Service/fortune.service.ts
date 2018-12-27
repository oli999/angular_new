// fortune.service.ts

/*
	다양한 컴포넌트에서 공통으로 사용할 모델이나 
	기능을 정의하고 공유할때 서비스를 사용한다. 
*/

import {Injectable} from '@angular/core';

@Injectable()
export class FortuneService{
	private fortune:string;
	//생성자 
	constructor(){
		this.fortune='동쪽으로 가면 귀인을 만나요';
	}
	getFortune():string{
		return this.fortune;
	}
	setFortune(fortune:string):void{
		this.fortune=fortune;
	}
}
