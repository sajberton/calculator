
document.onkeyup = function(event){

	var keyPress = event.keyCode;

	if (keyPress==97 || keyPress==49) {

		calculator.answer.value += 1;
	}

	if (keyPress==98 || keyPress==50) {

		calculator.answer.value += 2;
	}

	if (keyPress==99 || keyPress==51) {

		calculator.answer.value += 3;
	}

	if (keyPress==100 || keyPress==52) {

		calculator.answer.value += 4;
	}

	if (keyPress==101 || keyPress==53) {

		calculator.answer.value += 5;
	}

	if (keyPress==102 || keyPress==54) {

		calculator.answer.value += 6;
	}

	if (keyPress==103 || keyPress==55) {

		calculator.answer.value += 7;
	}

	if (keyPress==104 || keyPress==56) {

		calculator.answer.value += 8;
	}

	if (keyPress==105 || keyPress==57) {

		calculator.answer.value += 9;
	}

	if (keyPress==96 || keyPress==48) {

		calculator.answer.value += 0;
	}

	// The aritmetical signs
	if (keyPress==107) {

		calculator.answer.value += '+';
	}

	if (keyPress==109) {

		calculator.answer.value += '-';
	}

	if (keyPress==106) {

		calculator.answer.value += '*';
	}

	if (keyPress==111) {

		calculator.answer.value += '/';
	}

	if (keyPress==187 || keyPress==13) {

		calculator.answer.value = Math.floor(eval(calculator.answer.value));
	}

	if (keyPress==27) {

		calculator.answer.value = '';
	}


}

