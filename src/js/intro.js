function fadein() {
	const title = document.getElementById("intro")
	title.classList.toggle("fadein");
}

window.addEventListener("load", fadein);
