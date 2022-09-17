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

    let box = document.getElementById('box');
    
    // console.log(box.getAttribute("left"));
    // console.log(box.getAttribute(""));
    console.log(getOffset(box).left);
    console.log(getOffset(box).top);
    console.log(getOffset(box).width);
    console.log(getOffset(box).height);

}

