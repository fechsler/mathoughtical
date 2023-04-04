function generateProblem(problem) {
	// Actually display problem to HTML
	const problemText = document.getElementById("problem");
	problemText.innerHTML = problem;
}

function randChoice(choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

function generateAddProblem(maxDigits = 1) {
	const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var problem = String(randChoice(nums)) + " × " + String(randChoice(nums)) + " = ";
	document.getElementById("name-header").addEventListener("click", generateProblem(problem));
}

generateAddProblem();


