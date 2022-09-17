class Atom extends Obj {
    constructor(name) {
	super();
	switch (name) {
	case 'P':
	    this.element = document.createElement('div');
	    this.element.setAttribute('id', 'atom');
	    this.element.textContent = 'P';
	    break;
	case 'Q':
	    this.element = document.createElement('div');
	    this.element.setAttribute('id', 'atom');
	    this.element.textContent = 'Q';
	    break;
	case 'R':
	    this.element = document.createElement('div');
	    this.element.setAttribute('id', 'atom');
	    this.element.textContent = 'R';
	    break;
	case 'S':
	    this.element = document.createElement('div');
	    this.element.setAttribute('id', 'atom');
	    this.element.textContent = 'S';
	    break;
	default:
	    throw name+' is an invalid atom name';
	}
	this.name = name;
    }
}
