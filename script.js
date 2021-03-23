function rangeSummation(startNumber, endNumber) {
	let n;
	n = endNumber - startNumber + 1;
	return (n * (endNumber + startNumber) / 2);
}

function euclideanGCD(firstNum, secondNum) {
	let buf1 = firstNum;
	let buf2 = secondNum;
	while (buf2 !== 0) {
		let temp = buf2;
		buf2 = buf1 % buf2;
		buf1 = temp;
	};
	return buf1;
}

function findAllDividers(num) {
	let result = "1";
	for (let i = 2; i <= num; i++) {
		if (!(num % i)) {
			result = result + '; ' + i;
		}
	}
	return result;
}

function promptArithmetic() {
	const frstNum = +prompt('Enter first number, please:');
	const scndNum = +prompt('Enter second number, please:');
	const oper = prompt('Type the operation, please:\n + addition \n - substraction \n * multiplication \n \/ division');
	if (isFinite(frstNum) && isFinite(scndNum)) {
		if (oper === "+") {
			alert (`Result is: ${frstNum + scndNum}`);
		} else if (oper === "-") {
			alert (`Result is: ${frstNum - scndNum}`);
		} else if (oper === "*") {
			alert (`Result is: ${frstNum * scndNum}`);
		} else if (oper === "/") {
			alert (`Result is: ${frstNum / scndNum}`);
		} else {
			alert(`I can\'t understand this operation: ${oper} :(`)
		}
	} else {
		alert('Both values you typed has to be numbers!')
	};
};

function digiShifter() {
	const number = prompt("Type the number, please:");
	const shift = prompt("Type amount of digits to shift:");
	let outRes;
	if(isFinite(parseInt(shift)) && (parseInt(shift) < number.length)) {
		outRes = number.slice(shift) + number.slice(0, shift);
		alert(`Your result is: ${outRes}`);
	} else {
		alert('Warning! Inappropriate shift!');
	}
};

function weekdayLooper() {
	let conTinue = true;
	let i = 0;
	const week = ['Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
				]
	do {
		conTinue = confirm(`Day ${week[i]}. Do you want to see the next day?`);
		i++;
		if (i > 6) i = 0;
	} while (conTinue);
}

function multiPlicator(oText) {
	for (let i = 2; i <= 9; i++) {
		for (let j = 1; j <= 10; j++) {
			oText.innerHTML += `${i} * ${j} = ${i * j}<br>`;
		}
		oText.innerHTML += "-------------------<br>"
	}
}

function guessNumber() {
	alert('Mind a number from 0 to 100, please!');
	isContinue = true;
	rangeFloor = 0;
	rangeSilly = 100;
	do {
		let guess = rangeFloor + Math.round((rangeSilly - rangeFloor)/2);
		if (confirm(`Is you guessed ${guess}?`)) {
			isContinue = false;
		} else {
			if (confirm(`Is you guessed number greater than ${guess}?`)) {
				rangeFloor = guess + 1;
			} else {
				rangeSilly = guess - 1;
			}
		};
	} while (isContinue);
	alert('TA - DA !!!!');
}

function processForm(oForm) {
	const task = oForm.elements.task.value;
	let result;
	switch (task) {
		case "sumTheRange":
			result = rangeSummation(
				+oForm.elements.rangeStart.value, +oForm.elements.rangeEnd.value);
			alert(`Sum of elements in the range is ${result}`);
			break;
		case "findTheGCD":
			result = euclideanGCD(
				+oForm.elements.firstParticipantGCD.value, 
				+oForm.elements.secondParticipantGCD.value
			);
			alert(`The greatest common divider (GCD) is: ${result}`);
			break;
		case "getAllDividers":
			const inpNum = +prompt('Enter numeric value, please:');
			if (isFinite(inpNum)) {
				result = findAllDividers(inpNum);
				alert(`All dividers of given number are:\n ${result}`)
			} else {
				alert("Stop cheating! It has to be a number!")
			}
			break;
		case "countDigits":
			const inputVal = prompt('Enter numeric value, please:');
			if (isFinite(inputVal)) {
				alert(`Your number has ${inputVal.length} digits`);
			} else {
				alert("Stop cheating! It has to be a number!")
			}
			break;
		case "numberCounters10":
			let positives = 0;
			let negatives = 0;
			let evens = 0;
			let odds = 0;
			for (let i=1; i <= 10; i++) {
				let val = +prompt(`Enter numeric value #${i} , please:`);
				if (isFinite(val)) {
					(val >= 0) 
					? positives++ 
					: negatives++;
					
					(val % 2) 
						? odds++
						: evens++;
				} else {
					alert("Stop cheating! It has to be a number!");
					return;
				}
			}
			alert(`Results are: \n positives: ${positives} \n negatives: ${negatives} \n evens: ${evens} \n odds: ${odds}`);
			break;
		case "loopTheCalculator":
			let oneMore = true;
			do {
				promptArithmetic();
				oneMore = confirm('Wanna try one more time?')
			} while (oneMore);
			break;
		case "shiftTheDigits":
			digiShifter();
			break;
		case "loopTheWeek":
			weekdayLooper();
			break;
		case "multiplyingTable":
			let text = document.getElementById('mul-table');
			multiPlicator(text);
			break;
		case "guessTheNumber":
			guessNumber();
			break;
	}
}