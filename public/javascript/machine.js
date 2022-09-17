class Machine extends Obj {
    constructor(leftobj, connect, rightobj) {
	super();
	this.leftobj = leftobj;
	let symbol;
	let connectorClass = '';
	let leftClass = leftobj.element.classList[0];
	let rightClass = rightobj.element.classList[0];
	switch (connect) {
		case 'and':
			symbol = $(`
			<svg id="and-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 548.14 594.85"><path d="M631.45,697a42.5,42.5,0,0,1-38.86-25.26L404.28,247.4l-197.46,425a42.49,42.49,0,0,1-77.07-35.8L366.64,126.75a42.48,42.48,0,0,1,77.37.67L670.26,637.27A42.5,42.5,0,0,1,631.45,697Z" transform="translate(-125.79 -102.16)"/></svg>
			`)[0];
			break;
			
		case 'or':
			symbol = $(`
			<svg id="or-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 555.26 602.57"><path d="M405.38,701.28a43.06,43.06,0,0,1-39-24.9l-240-516.48a43,43,0,1,1,78.06-36.27l200,430.53L595.24,124.31a43,43,0,1,1,78.68,34.92L444.72,675.7a43,43,0,0,1-39,25.58Z" transform="translate(-122.37 -98.72)"/></svg>
			`)[0];
			break;
		
		case 'imp':
			symbol = $(`
			<svg id="implies-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 708.65 433.85"><path d="M555.88,617.13a38.51,38.51,0,0,1-28.68-64.2L629.48,438.72H84a38.51,38.51,0,0,1,0-77H629.48L527.2,247.48a38.51,38.51,0,1,1,57.37-51.38L744.35,374.52l0,0h0l0,0h0s0,0,0,0l0,0,0,0h0l0,0h0a38.52,38.52,0,0,1,1.91,48.56c-.74,1-1.52,1.93-2.34,2.84L584.57,604.31A38.37,38.37,0,0,1,555.88,617.13Z" transform="translate(-45.52 -183.29)"/></svg>
			`)[0];
			connectorClass = "implies-symbol"
			break;
		
		default:
			throw connect+' is an invalid machine connect';
	}

	let className = connect + "\(" + leftClass + "\," + rightClass + "\)";

	this.element = $(`
		<div class="` + className + ` connector left-"` + leftClass + `>
			<div class="connector-wrapper">
				<div class="connector-left">
					` + (leftobj.element).outerHTML + `
				</div>
				<div class="connector-symbol ` + connectorClass + `">
					` + symbol.outerHTML + `
				</div>
				<div class="connector-right">
					` + (rightobj.element).outerHTML + `
				</div>
			</div>
		</div>
	`)[0];
        this.connect = connect;
        this.rightobj = rightobj;
    }
}




// class Machine extends Obj {
//     constructor(leftobj, connect, rightobj) {
// 	super();
//         this.leftobj = leftobj;
// 	switch (connect) {
// 	case 'and':
// 	    this.element = document.createElement('div');
// 	    this.element.setAttribute('id', 'machine');
// 	    this.element.appendChild(leftobj.element);
// 	    let andText = document.createTextNode('/\\');
// 	    this.element.appendChild(andText);
// 	    this.element.appendChild(rightobj.element);
// 	    break;
// 	case 'or':
// 	    this.element = document.createElement('div');
// 	    this.element.setAttribute('id', 'machine');
// 	    this.element.appendChild(leftobj.element);
// 	    let orText = document.createTextNode('\\/');
// 	    this.element.appendChild(orText);
// 	    this.element.appendChild(rightobj.element);
// 	    break;
// 	case 'imp':
// 	    this.element = document.createElement('div');
// 	    this.element.setAttribute('id', 'machine');
// 	    this.element.appendChild(leftobj.element);
// 	    let impText = document.createTextNode('->');
// 	    this.element.appendChild(impText);
// 	    this.element.appendChild(rightobj.element);
// 	    break;
// 	default:
// 	    throw connect+' is an invalid machine connect';
// 	}
//         this.connect = connect;
//         this.rightobj = rightobj;
//     }
// }
