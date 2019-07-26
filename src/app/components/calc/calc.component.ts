import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
	public number1: number;   
	public number2: number;
	public result:number;
  constructor() { }

  ngOnInit() {
  }

  public add(){
  	if(this.number1 != null && this.number2 != null){
  		this.result = this.number1 + this.number2 
  	}
  	
  }

}
