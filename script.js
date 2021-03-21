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

function cornerBoy() {
	const payment = +prompt('How much you agree to pay for?');
	if (payment > 0 && payment < 200) {
		alert('There is no discount for greedy persons, dude!');
	} else if(payment >= 200 && payment <= 300) {
		alert('Can we propose 3% discount for you?');
	} else if(payment >= 300 && payment <= 500) {
		alert('Can we propose 5% discount for you?');
	} else if(payment > 500) {
		alert('Wow! 7% discount is only for you, fellow!');
	} else {
		alert('Hey! You want to say that I owes money to you?!');
	}
}

function fitterRoundSquare() {
	const circLength = +prompt('Give me a circle length, please');
	const squarePerimeter = +prompt('Give me a square perimeter, please');
	(circLength / Math.PI <= squarePerimeter/4) 
		? alert('The circle fits into this square') 
		: alert('Circle doesn\'t fit inside such square');
}

function getNextDay(presentDay) {
	let oDate = new Date(presentDay);
	oDate.setDate(oDate.getDate() + 1);
	oDate = oDate.toLocaleDateString('en-GB', {  
		day:   'numeric',
		month: 'short',
		year:  'numeric',
	});
	alert(`The next day will be: ${oDate}`);
}

function convertCurrency(amount, currency) {
	const curCourse = [[0.84, "EUR"], [27.72, "UAH"], [1.7, "AZN"]];
	const cache = (amount * curCourse[currency][0]).toFixed(2);
	alert(`Take your cache: ${cache} ${curCourse[currency][1]}, please :\)`);
	console.log(amount);
	console.log(currency);
}

function checkQuiz(arrAnswers) {
	let result = 0;
	for(let i = 0; i <= 2; i++) {
		if (arrAnswers[i]) {
			result += 2;
		};
	};
	alert(`Your score is ${result} points!`);
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
		case "convertTheCurrency":
			convertCurrency(oForm.elements.usdAmount.value, +oForm.elements.currency.value);
			break;
		case "checkTheDiscount":
			cornerBoy();
			break;
		case "checkCircleFitting":
			fitterRoundSquare();
			break;
		case "checkUserQuiz":
			checkQuiz([
				oForm.elements.task1.value,
				oForm.elements.task2.value,
				oForm.elements.task3.value
			]);
			break;
		case "checkNextDate":
			getNextDay(oForm.elements.calendar.value);
			break;
	}
}