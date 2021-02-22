import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculette',
	templateUrl: './calculette.component.html',
	styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	num1!: number;
	num2!: number;
	result!: number;


	sum() {
		this.result = this.num1 + this.num2;

	}

	diff() {
		this.result = this.num1 - this.num2;

	}
	mult() {
		this.result = this.num1 * this.num2;

	}
	div() {
		this.result = this.num1 / this.num2;
	}

}
