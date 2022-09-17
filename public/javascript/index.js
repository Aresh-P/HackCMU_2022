function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }

window.onload = function() {
    let test = new Draggable.Droppable(document.getElementById('givens-playground'), {
        draggable: 'div'
        // dropzone: 
    });

    let givens = document.getElementById('givens-playground');
    let expr =
	new Machine(
	    new Machine (
		new Atom('P'),
		'and',
		new Atom('Q'),
	    ),
	    'imp',
	    new Machine(
		new Atom('R'),
		'or',
		new Atom('S'),
	    )
	);
    givens.innerHTML = expr.element.outerHTML;
    // console.log(box.getAttribute("left"));
    // console.log(box.getAttribute(""));
    // console.log(getOffset(box).left);
    // console.log(getOffset(box).top);
    // console.log(getOffset(box).width);
    // console.log(getOffset(box).height);

}

