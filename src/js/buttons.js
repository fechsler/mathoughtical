function showpg(id) {
	for (let i = 0; i < document.getElementById("mid").children.length; i++) {
		document.getElementById("mid").children[i].style.display = "none";
	}
		
	document.getElementById(id).style.display = "grid";
}
