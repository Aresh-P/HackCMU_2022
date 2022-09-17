class Machine extends Obj {
    constructor(leftobj, connect, rightobj) {
	super();
        this.leftobj = leftobj;
	switch (connect) {
	case 'and':
	    this.element = document.createElement('div');
	    this.element.setAttribute('id', 'machine');
	    this.element.appendChild(leftobj.element);
	    let andText = document.createTextNode('/\\');
	    this.element.appendChild(andText);
	    this.element.appendChild(rightobj.element);
	    break;
	case 'or':
	    this.element = document.createElement('div');
	    this.element.setAttribute('id', 'machine');
	    this.element.appendChild(leftobj.element);
	    let orText = document.createTextNode('\\/');
	    this.element.appendChild(orText);
	    this.element.appendChild(rightobj.element);
	    break;
	case 'imp':
	    this.element = document.createElement('div');
	    this.element.setAttribute('id', 'machine');
	    this.element.appendChild(leftobj.element);
	    let impText = document.createTextNode('->');
	    this.element.appendChild(impText);
	    this.element.appendChild(rightobj.element);
	    break;
	default:
	    throw connect+' is an invalid machine connect';
	}
        this.connect = connect;
        this.rightobj = rightobj;
    }
}
