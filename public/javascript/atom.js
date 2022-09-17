class Atom extends Obj {
    constructor(name) {
	super();
	// let wrapper;
	// let text;
	let lowerCase = name.toLowerCase();

	if (lowerCase != 'p' && lowerCase != 'q' && 
		lowerCase != 'r' && lowerCase != 's') {
		throw name+' is an invalid atom name';
	}
	this.element = $(`
		<div class="` + lowerCase + ` atom">
			<div class="atom-text-wrapper">
				<p class="atom-text">
					` + lowerCase + `
				</p>
			</div>
		</div>
	`)[0];
    }
}


// class Atom extends Obj {
//     constructor(name) {
// 	super();
// 	switch (name) {
// 	case 'P':
// 	    this.element = document.createElement('div');
// 	    this.element.setAttribute('id', 'atom');
// 	    this.element.textContent = 'P';
// 	    break;
// 	case 'Q':
// 	    this.element = document.createElement('div');
// 	    this.element.setAttribute('id', 'atom');
// 	    this.element.textContent = 'Q';
// 	    break;
// 	case 'R':
// 	    this.element = document.createElement('div');
// 	    this.element.setAttribute('id', 'atom');
// 	    this.element.textContent = 'R';
// 	    break;
// 	case 'S':
// 	    this.element = document.createElement('div');
// 	    this.element.setAttribute('id', 'atom');
// 	    this.element.textContent = 'S';
// 	    break;
// 	default:
// 	    throw name+' is an invalid atom name';
// 	}
// 	this.name = name;
//     }
// }
