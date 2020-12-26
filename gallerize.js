class Gallerize {
	constructor(tag, imgsrc, link) {
		this.span = document.createElement("DIV");
		this.span.setAttribute("class", "Gallerize");

		this.container = document.createElement("DIV");
		this.container.setAttribute("class", "container");
		this.span.appendChild(this.container);

		this.a = document.createElement("A");
		this.a.setAttribute("href", link);
		this.container.appendChild(this.a);

		this.img = document.createElement("IMG");
		this.img.src = imgsrc;
		this.a.appendChild(this.img);
					
		this.tag = document.createElement("DIV");
		this.tag.innerHTML = tag;
		this.tag.setAttribute("class", "tag");
		this.container.appendChild(this.tag);

		this.span.addEventListener("mouseover", this.showTag.bind(this));
		this.span.addEventListener("mouseout", this.hideTag.bind(this));
	}
				
	showTag() {
		this.oldOpacity = this.tag.style.opacity;
		this.tag.style.opacity = 1;
	}

	hideTag() {
		this.tag.style.opacity = this.oldOpacity;
	}

		display() {
		return this.span;
	}
}