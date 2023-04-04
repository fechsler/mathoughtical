function generateProblem(problem) {
	// Actually display problem to HTML
	const problemText = document.getElementById("problem");
	problemText.innerHTML = problem;
}

function randChoice(choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

function generateAddProblem(maxDigits = 3) {
	const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	num1 = "";
	num2 = "";
	for (i = 0; i < maxDigits; i++) {
		num1 += String(randChoice(nums));
		num2 += String(randChoice(nums));
		// Remove leading zeros from multidigit numbers
		if (maxDigits > 1) {
			if (num1[0] == "0") {
				num1 = num1.replace(num1[0], "");
			}
			if (num2[0] == "0") {
				num2 = num1.replace(num1[0], "");
			}
		}
	}
	var problem = num1 + " + " + num2 + " = ";
	document.getElementById("name-header").addEventListener("click", generateProblem(problem));
}

// multiplication sign = ×

generateAddProblem();


