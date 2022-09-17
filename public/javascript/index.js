// window.onload = function() {
//     function dragMoveListener (event) {
//         var target = event.target
//         // keep the dragged position in the data-x/data-y attributes
//         var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
//         var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

//         // translate the element
//         target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

//         // update the posiion attributes
//         target.setAttribute('data-x', x)
//         target.setAttribute('data-y', y)
//     }

//     interact('.draggable:not(.solution)').draggable({
//         inertia: true,
//         modifiers: [
//             interact.modifiers.restrictRect({
//             restriction: 'parent',
//             endOnly: true
//             })
//         ],
//         autoScroll: false,
//         listeners: { 
//             move: dragMoveListener 
//             }
//     });

//     interact('.solution').draggable({
//       inertia: true,
//       modifiers: [
//           interact.modifiers.restrictRect({
//           restriction: '#content',
//           endOnly: true
//           })
//       ],
//       autoScroll: false,
//       listeners: { 
//           move: dragMoveListener 
//       }
//   });

//     interact('.dropzone').dropzone({
//         // only accept elements matching this CSS selector
//         accept: '.atom',
//         // Require a 75% element overlap for a drop to be possible
//         // overlap: 0.5,
    
//         // listen for drop related events:
    
//         ondropactivate: function (event) {
//             // (event.target).classList.add('atom-active');
            
//         },
//         ondragenter: function (event) {
//             // interact(event.relatedTarget).unset();
//             // var draggableElement = event.relatedTarget
//         // var dropzoneElement = event.target
    
//         // // feedback the possibility of a drop
//         // dropzoneElement.classList.add('drop-target')
//         // draggableElement.classList.add('can-drop')
//         // draggableElement.textContent = 'Dragged in'
//         },
//         // ondragleave: function (event) {
//         // // remove the drop feedback style
//         // event.target.classList.remove('drop-target')
//         // event.relatedTarget.classList.remove('can-drop')
//         // event.relatedTarget.textContent = 'Dragged out'
//         // },
//         ondrop: function (event) {
//             (event.relatedTarget).classList.add('atom-active');
//             (event.relatedTarget).classList.remove('draggable');
//             // (event.relatedTarget).transform.parent = (event.target).transform;
//             (event.relatedTarget).setAttribute('data-x', 0);
//             (event.relatedTarget).setAttribute('data-y', 0);
//             (event.relatedTarget).style.transform = "";
//             (event.target).appendChild(event.relatedTarget);
//         // event.relatedTarget.textContent = 'Dropped'
//         },
//         // ondropdeactivate: function (event) {
//         // // remove active dropzone feedback
//         // event.target.classList.remove('drop-active')
//         // event.target.classList.remove('drop-target')
//         // }
//     });
// }

// let givens = document.getElementsByClassName('givens-playground')[0];
// let expr = new Machine(
// 	    new Machine (
// 		new Atom('P'),
// 		'and',
// 		new Atom('Q'),
// 	    ),
// 	    'imp',
// 	    new Machine(
// 		new Atom('R'),
// 		'or',
// 		new Atom('S'),
// 	    )
// );
// expr.element.classList.add("draggable");
// givens.innerHTML = expr.element.outerHTML;

// let expr2 = new Atom('P');
// // let expr2 = new Machine(
// // 	    new Machine (
// // 		new Atom('P'),
// // 		'and',
// // 		new Atom('Q'),
// // 	    ),
// // 	    'imp',
// // 	    new Machine(
// // 		new Atom('R'),
// // 		'or',
// // 		new Atom('S'),
// // 	    )
// // );
// expr2.element.classList.add("draggable");
// givens.innerHTML += expr2.element.outerHTML;

// // console.log(expr.element.outerHTML == expr2.element.outerHTML);
// // console.log(expr.element.classList);
// // console.log(expr.element.classList[0]);

// function getOffset(el) {
//     const rect = el.getBoundingClientRect();
//     return {
//       left: rect.left + window.scrollX,
//       top: rect.top + window.scrollY,
//       width: el.offsetWidth,
//       height: el.offsetHeight
//     };
//   }

// (document.getElementById("logo-text-wrapper")).addEventListener("click", () => {
//     console.log((expr));
//     console.log((expr.element.style.transform));
//     // console.log((expr).getAttribute('transform'));
//     console.log(getOffset(expr.element).left);
//     console.log(getOffset(expr.element).top);
//     console.log(getOffset(expr.element).width);
//     console.log(getOffset(expr.element).height);

// });

// function addClassesAndListeners() {
//   $('.givens-playground > *').each(function() {
//       // this.addEventListener("dblclick", event => {
//       //     console.log("Double-click detected");
//       // })
//       let classString = $(this).attr('class');
//       if (classString.substr(0, 3) === 'imp' && !$(this).children('.connector-wrapper').children('.connector-left').hasClass('inactive-constructor')) {
//           $(this).children('.connector-wrapper').children('.connector-left').addClass('inactive-constructor');
  
  
//           let leftindex = classString.lastIndexOf('left-');
//           let spaceindex = classString.indexOf(' ', leftindex);
//           let acceptstr = '.' + classString.substr(leftindex + 5, spaceindex - (leftindex + 5));
//           interact($(this).children('.connector-wrapper').children('.connector-left')[0]).dropzone({
//               accept: acceptstr,
//               overlap: 0.75,
  
//               ondrop: function (event) {
//                   console.log("successful");
//                   // $(this).children('.connector-wrapper').children('.connector-left').removeClass('inactive-constructor');
  
//                   // event.target.classList.remove('inactive-constructor');
//                   $(event.target.parentElement).width();
//                   let newx = $(event.relatedTarget).attr('data-x') - $(event.target).width() - 20;
//                   let newy = $(event.relatedTarget).attr('data-y') + 5;
//                   event.relatedTarget.style.transform = 'translate(' + newx + 'px, ' + newy + 'px)'
//                   $(event.relatedTarget).attr('data-x', newx);
//                   $(event.relatedTarget).attr('data-y', newy);
                  
//                   let bigwidth = $(event.target.parentElement).width();
//                   let offset = getOffset(event.target);
//                   $(event.relatedTarget.parentElement).append($(event.target.parentElement.lastElementChild.firstElementChild.outerHTML).css({position: 'absolute', top: offset.top + 5, left: offset.left + bigwidth + 10}).addClass('draggable'));
//               }
//           });
//       } else if (classString.substr(0, 3) === 'and' && !$(this).hasClass('listener')) {
//           let obj = this;
//           $(obj).addClass('listener');

//           document.addEventListener('onclick', function () {
//               $(obj.parentElement).append($(obj).children('.connector-left').addClass('draggable'));
//               $(obj.parentElement).append($(obj).children('.connector-right').addClass('draggable'));
//               $(obj).remove();
//           });
//       } else if (classString.substr(0, 2) === 'or' && !$(this).hasClass('listener')) {
//           let obj = this;
//           $(obj).addClass('listener');

//           document.addEventListener('onclick', function () {
//               let environment = obj.parentElement.parentElement.parentElement.children.indexOf(obj.parentElement.parentElement);
//               let placeholder = $(obj).children('.connector-right').addClass('draggable')[0];
//               let placeholder2 = $(obj).children('.connector-left').addClass('draggable')[0];
//               $(obj).remove();

//               let string = `
//                   <div class="givens-wrapper">
//                   <div class="givens-title-wrapper">
//                       <h3 class="givens-title">
//                           Givens:
//                       </h3>
//                   </div>
//                   <div class="givens-playground">
//               `;
              
//               for (let i = 0; i < $('.givens-playground')[environment].children.length; i++) {
//                   string += $('.givens-playground')[environment].children[i].outerHTML;
//               }
//               string += placeholder.outerHTML + '</div></div>';
//               string += `
//                 <div class="goals-wrapper">
//                 <div class="goals-title-wrapper">
//                     <h3 class="goals-title">
//                         Goals:
//                     </h3>
//                 </div>
//                 <div class="goals-playground">
//               `;

//               for (let i = 0; i < $('.goals-playground')[environment].children.length; i++) {
//                 string += $('.goals-playground')[environment].children[i].outerHTML;
//               }

//               string += '</div></div>'

//               $('.givens-playground')[environment].appendChild(placeholder2);
//               $('#content').append('<div class="environment">' + string + '</div>')
//           });
//       }
//   });
// }
  
// // window.onload = function() {

// //////////////////////////////From scratch attempt//////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
//     // let test = new Draggable.Droppable(document.getElementById('givens-playground'), {
//     //     draggable: 'div'
//     //     // dropzone: 
//     // });

//     // let box = document.getElementById('box');
    
//     // console.log(box.getAttribute("left"));
//     // console.log(box.getAttribute(""));
//     // console.log(getOffset(box).left);
//     // console.log(getOffset(box).top);
//     // console.log(getOffset(box).width);
//     // console.log(getOffset(box).height);


// //////////////////////////////interactjs attempt////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

// //     function dragMoveListener (event) {
// //         var target = event.target
// //         // keep the dragged position in the data-x/data-y attributes
// //         var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
// //         var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

// //         // translate the element
// //         target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

// //         // update the posiion attributes
// //         target.setAttribute('data-x', x)
// //         target.setAttribute('data-y', y)
// //     }

// //     interact('.draggable:not(.solution)').draggable({
// //         inertia: true,
// //         modifiers: [
// //             interact.modifiers.restrictRect({
// //             restriction: 'parent',
// //             endOnly: true
// //             })
// //         ],
// //         autoScroll: true,
// //         // dragMoveListener from the dragging demo above
// //         listeners: { 
// //             move: dragMoveListener 
// //             }
// //     });

// //     interact('.solution').draggable({
// //       inertia: true,
// //       modifiers: [
// //           interact.modifiers.restrictRect({
// //           restriction: '#content',
// //           endOnly: true
// //           })
// //       ],
// //       autoScroll: true,
// //       // dragMoveListener from the dragging demo above
// //       listeners: { 
// //           move: dragMoveListener 
// //           }
// //   });

// //     interact('.dropzone').dropzone({
// //         // only accept elements matching this CSS selector
// //         accept: '.atom',
// //         // Require a 75% element overlap for a drop to be possible
// //         // overlap: 0.1,
    
// //         // listen for drop related events:
    
// //         ondropactivate: function (event) {
// //             // (event.target).classList.add('atom-active');
            
// //         },
// //         ondragenter: function (event) {
// //             // interact(event.relatedTarget).unset();
// //             // var draggableElement = event.relatedTarget
// //         // var dropzoneElement = event.target
    
// //         // // feedback the possibility of a drop
// //         // dropzoneElement.classList.add('drop-target')
// //         // draggableElement.classList.add('can-drop')
// //         // draggableElement.textContent = 'Dragged in'
// //         },
// //         // ondragleave: function (event) {
// //         // // remove the drop feedback style
// //         // event.target.classList.remove('drop-target')
// //         // event.relatedTarget.classList.remove('can-drop')
// //         // event.relatedTarget.textContent = 'Dragged out'
// //         // },
// //         ondrop: function (event) {
// //             (event.relatedTarget).classList.add('atom-active');
// //             (event.relatedTarget).classList.remove('draggable');
// //             // (event.relatedTarget).transform.parent = (event.target).transform;
// //             (event.relatedTarget).setAttribute('data-x', 0);
// //             (event.relatedTarget).setAttribute('data-y', 0);
// //             (event.relatedTarget).style.transform = "";
// //             (event.target).appendChild(event.relatedTarget);
// //         // event.relatedTarget.textContent = 'Dropped'
// //         },
// //         // ondropdeactivate: function (event) {
// //         // // remove active dropzone feedback
// //         // event.target.classList.remove('drop-active')
// //         // event.target.classList.remove('drop-target')
// //         // }
// //     });
// // }


// // const position = { x: 0, y: 0 }

// // interact('.draggable').draggable({
// //   modifiers: [
// //     interact.modifiers.restrictRect({
// //       restriction: 'parent',
// //       endOnly: true
// //     })
// //   ],
// //   listeners: {
// //     start (event) {
// //       console.log(event.type, event.target)
// //     },
// //     move (event) {
// //       position.x += event.dx
// //       position.y += event.dy

// //       event.target.style.transform =
// //           `translate(${position.x}px, ${position.y}px)`
// //       },
// //   }
// // });