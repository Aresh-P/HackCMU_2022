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

//////////////////////////////From scratch attempt//////////////////////////////
////////////////////////////////////////////////////////////////////////////////
    let test = new Draggable.Droppable(document.getElementById('givens-playground'), {
        draggable: 'div'
        // dropzone: 
    });

    let box = document.getElementById('box');
    
    // console.log(box.getAttribute("left"));
    // console.log(box.getAttribute(""));
    console.log(getOffset(box).left);
    console.log(getOffset(box).top);
    console.log(getOffset(box).width);
    console.log(getOffset(box).height);


//////////////////////////////interactjs attempt////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const position = { x: 0, y: 0 }

    interact('.draggable').draggable({
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      
      listeners: {
        start (event) {
          console.log(event.type, event.target)
        },
        move (event) {
          position.x += event.dx
          position.y += event.dy

          event.target.style.transform =
              `translate(${position.x}px, ${position.y}px)`
          },
      }
    });

}



