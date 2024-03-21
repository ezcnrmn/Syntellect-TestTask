import { makeAutoObservable } from "mobx";

class Test {
	input1 = "";
	input2 = "";
	input3 = "";
	input4 = "";

	constructor() {
		makeAutoObservable(this);
	}

	setInput1(value: string) {
		this.input1 = value;
	}
	setInput2(value: string) {
		this.input2 = value;
	}
	setInput3(value: string) {
		this.input3 = value;
	}
	setInput4(value: string) {
		this.input4 = value;
	}
}

export default new Test();
