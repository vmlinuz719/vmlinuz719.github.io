function header() {
	let div = document.createElement("DIV");
	div.setAttribute("id", "header");
	
	let div2 = document.createElement("DIV");
	div.setAttribute("class", "headerContent");
	div.appendChild(div2);
	
	let name = document.createElement("H1");
	let nameText = document.createTextNode("Victor M. Linuz");
	name.appendChild(nameText);
	div2.appendChild(name);
	
	let blurb = document.createElement("P");
	let blurbText = document.createTextNode
		("Programmer, Car Aficionado, Enjoyer of Bargain Bin Industrial Rock");
	blurb.appendChild(blurbText);
	div2.appendChild(blurb);
	
	let content = document.createElement("P");
	content.innerHTML =
		'<a href="index.html">Gallery</a> | ' +
		'<a href="about.html">About</a> | ' +
		'<a target="_blank" rel="noopener noreferrer" ' + 
		'href="https://github.com/vmlinuz719/">GitHub</a> | ' +
		'<a href="mailto:vmlinuz719@gmail.com">vmlinuz719@gmail.com</a>';
	div2.appendChild(content);
	
	return div;
}