let currentLevel;
let environments = [];

let exampleenvironments = [
    {
        givens: [
            [
                [
                    'p',
                    'imp',
                    'q'
                ],
                'or',
                'p'
            ],
            [
                'p',
                'imp',
                'q'
            ],
            'p'
        ],
        goals: [
            'q'
        ]
    },
    {
        givens: ['p'],
        goals: ['p']
    }
];



function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
}



function main() {
    currentLevel = new Level(exampleenvironments);
    $('body').append(currentLevel.element);
}


function dragMoveListener(event) {
    var target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    




    // let goals = document.getElementsByClassName("goals-wrapper");
    let givens = (event.target).parentElement;
    // console.log(givens);
    
    let goals = $(givens.parentElement.parentElement).children(".goals-wrapper")[0];
    // let currEnv = goals.parentElement;
    // let envIdx = Array.from(goals.parentElement.parentElement.children).indexOf();
    // console.log(goals);

    // let envIdx = currentLevel.environments.indexOf(currEnv);
    let leftCoord = getOffset(event.target).left;
    let width = getOffset(event.target).width;
    // console.log(leftCoord);
    // console.log(goals);
    // console.log(width);
    let goalsLeft = getOffset(goals).left;
    // console.log(goalsLeft);
    if ((leftCoord + width) >= (goalsLeft * .965)) {
    //     console.log("in GOALS!");
        let classStr = $(event.target).attr("class");
        // console.log(classStr);
        let spaceIdx = classStr.indexOf(' ', 0);
        let constructorStr = classStr.substr(0, spaceIdx);
        // console.log(constructorStr);
        // if (currentLevel.environments[envIdx].goals.includes(constructorStr))
        // console.log(goals);
        // console.log($(goals).children(".goals-playground")[0]);
        var children = ($(goals).children(".goals-playground")[0]).children;
        for(var i=0; i<children.length; i++){
            var child = children[i];
            let compareClassString = $(child).attr("class");
            // console.log(compareClassString);
            let compareSpaceIdx = compareClassString.indexOf(' ', 0);
            let compareConstructorStr = compareClassString.substr(0, compareSpaceIdx);
            // console.log(compareConstructorStr);
            if (compareConstructorStr === constructorStr) {

                document.addEventListener('mouseup', function() {
                    if (event.rect.left > goalsLeft) {
                        // console.log("YOU HAVE WON!");
                        $(child).removeClass("inactive-goal");
                        $(event.target).remove();
                        // check if environment done
                        let done = true;
                        for (var j=0; i<children.length; i++) {
                            var childj = children[j];
                            if ($(childj).hasClass("inactive-goal")) {
                                done = false;
                            }
                        }
                        if (done) {
                            // $(goals.parentElement).preventDefault();
                            // goals.parentElement.disabled;
                            // $(goals.parentElement).find("*").prop('disabled',true);
                            let niceMessage = $(`
                                <div class="msg">
                                    <h3>
                                        Nice! You did it!
                                    </h3>
                                </div>
                            `);
                            $(givens).append(niceMessage);
                            $(goals.parentElement).fadeOut(2000, function () {
                                this.remove();
                                addClassesAndListeners();
                                if ($('.environment').length == 0 && $('.msg').length == 0) {
                                    $('body').append(`
                                        <div class="msg">
                                            <h3>
                                                You beat the level!
                                            </h3>
                                        </div>
                                    `);
                                }
                            });
                            
                            goals.parentElement.classList.add("inactive-goal");
                        }
                    }
                });
            }
        }
        // for (const obj in ($(goals).children(".goals-playground")[0])) {
        //     console.log(obj);
    }
    
}


function dragging() {
    interact('.draggable').draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: false,
        listeners: {
            start: function (event) {
                // let rect = event.rect;
                // console.log(event.rect);
                // // $(event.target).attr('data-x-revert', $(event.target).attr('data-x'));
                // // $(event.target).attr('data-y-revert', $(event.target).attr('data-y'));
                // $(event.target.parentElement).prepend($(event.target.outerHTML).css({position: 'absolute', top: rect.top, left: rect.left}).attr('id', 'kill'));
            },
            move: dragMoveListener,
            end: function (event) {
                // // let goals = document.getElementsByClassName("goals-wrapper");
                // let givens = (event.target).parentElement;
                // // console.log(givens);
                
                // let goals = $(givens.parentElement.parentElement).children(".goals-wrapper")[0];
                // // let currEnv = goals.parentElement;
                // // let envIdx = Array.from(goals.parentElement.parentElement.children).indexOf();
                // // console.log(goals);

                // // let envIdx = currentLevel.environments.indexOf(currEnv);
                // let leftCoord = getOffset(event.target).left;
                // let width = getOffset(event.target).width;
                // // console.log(leftCoord);
                // // console.log(goals);
                // // console.log(width);
                // let goalsLeft = getOffset(goals).left;
                // // console.log(goalsLeft);
                // if ((leftCoord + width) >= (goalsLeft * .965)) {
                // //     console.log("in GOALS!");
                //     let classStr = $(event.target).attr("class");
                //     // console.log(classStr);
                //     let spaceIdx = classStr.indexOf(' ', 0);
                //     let constructorStr = classStr.substr(0, spaceIdx);
                //     // console.log(constructorStr);
                //     // if (currentLevel.environments[envIdx].goals.includes(constructorStr))
                //     // console.log(goals);
                //     // console.log($(goals).children(".goals-playground")[0]);
                //     var children = ($(goals).children(".goals-playground")[0]).children;
                //     for(var i=0; i<children.length; i++){
                //         var child = children[i];
                //         let compareClassString = $(child).attr("class");
                //         // console.log(compareClassString);
                //         let compareSpaceIdx = compareClassString.indexOf(' ', 0);
                //         let compareConstructorStr = compareClassString.substr(0, compareSpaceIdx);
                //         // console.log(compareConstructorStr);
                //         if (compareConstructorStr === constructorStr) {
                //             // console.log("YOU HAVE WON!");
                //             $(child).removeClass("inactive-goal");
                //             $(event.target).remove();
                //             // check if environment done
                //             let done = true;
                //             for (var j=0; i<children.length; i++) {
                //                 var childj = children[j];
                //                 if ($(childj).hasClass("inactive-goal")) {
                //                     done = false;
                //                 }
                //             }
                //             if (done) {
                //                 // $(goals.parentElement).preventDefault();
                //                 // goals.parentElement.disabled;
                //                 // $(goals.parentElement).find("*").prop('disabled',true);
                //                 let niceMessage = $(`
                //                     <div class="msg">
                //                         <h3>
                //                             Nice! You did it!
                //                         </h3>
                //                     </div>
                //                 `);
                //                 $(givens).append(niceMessage);
                //                 $(goals.parentElement).fadeOut(2000, function () {
                //                     this.remove();
                //                     if ($('.environment').length == 0) {
                //                         $('body').append(`
                //                             <div class="msg">
                //                                 <h3>
                //                                     You beat the level!
                //                                 </h3>
                //                             </div>
                //                         `);
                //                     }
                //                 });
                                
                //                 goals.parentElement.classList.add("inactive-goal");
                //             }
                //         }
                //     }
                //     // for (const obj in ($(goals).children(".goals-playground")[0])) {
                //     //     console.log(obj);
                //     }
                }
                // event.target.style.transform = 'translate(' + $(event.target).attr('data-x-revert') + 'px, ' + $(event.target).attr('data-y-revert') + 'px)'
                // $(event.target).attr('data-x', $(event.target).attr('data-x-revert'));
                // $(event.target).attr('data-y', $(event.target).attr('data-y-revert'));
                // $('#kill').remove();
            }
        });
}

function addClassesAndListeners() {
    $('.environment').css({height: (90 / $('.environment').length) + 'vh'});

    $('.givens-playground > *').each(function() {
        // this.addEventListener("dblclick", event => {
        //     console.log("Double-click detected");
        // })
        let classString = $(this).attr('class');
        if (classString.substr(0, 3) === 'imp' && ($(this).hasClass('adddrop') || !$(this).children('.connector-wrapper').children('.connector-left').hasClass('inactive-constructor'))) {
            $(this).children('.connector-wrapper').children('.connector-left').addClass('inactive-constructor');
    
    
            let leftindex = classString.lastIndexOf('left-');
            let spaceindex = classString.indexOf(' ', leftindex);
            let acceptstr = '.' + classString.substr(leftindex + 5, spaceindex - (leftindex + 5));
            console.log(acceptstr);
            interact($(this).children('.connector-wrapper').children('.connector-left')[0]).dropzone({
                accept: acceptstr,
                overlap: 0.75,
    
                ondrop: function (event) {
                    console.log("successful");
                    // $(this).children('.connector-wrapper').children('.connector-left').removeClass('inactive-constructor');
    
                    // event.target.classList.remove('inactive-constructor');
                    $(event.target.parentElement).width();
                    let newx = $(event.relatedTarget).attr('data-x') - $(event.target).width() - 20;
                    let newy = $(event.relatedTarget).attr('data-y') + 5;
                    event.relatedTarget.style.transform = 'translate(' + newx + 'px, ' + newy + 'px)'
                    $(event.relatedTarget).attr('data-x', newx);
                    $(event.relatedTarget).attr('data-y', newy);
                    
                    let bigwidth = $(event.target.parentElement).width();
                    let offset = getOffset(event.target);
                    $(event.relatedTarget.parentElement).append($(event.target.parentElement.lastElementChild.firstElementChild.outerHTML).css({position: 'absolute', top: offset.top + 5, left: offset.left + bigwidth + 10}).addClass('draggable'));
                }
            });
        } else if (classString.substr(0, 3) === 'and' && !$(this).hasClass('listener')) {
            let obj = this;
            $(obj).addClass('listener');
            console.log('added to and');



            const delta = 6;
            let startX;
            let startY;

            obj.addEventListener('mousedown', function (event) {
                startX = event.pageX;
                startY = event.pageY;
            });

            obj.addEventListener('mouseup', function (event) {
                const diffX = Math.abs(event.pageX - startX);
                const diffY = Math.abs(event.pageY - startY);

                if (diffX < delta && diffY < delta) {
                    // Click!
                    let top = getOffset(obj).top;
                    let left = getOffset(obj).left;
                    let leftobj = $(obj.firstElementChild.firstElementChild.firstElementChild.outerHTML).addClass('draggable').css({top: top, left: left});
                    $(obj.parentElement).append(leftobj);
                    $(obj.parentElement).append($(obj.firstElementChild.lastElementChild.firstElementChild.outerHTML).addClass('draggable').css({top: top, left: left + leftobj.width() + 10}));
                    $(obj).remove();
                    addClassesAndListeners();
                }
            });
        } else if (classString.substr(0, 2) === 'or' && !$(this).hasClass('listener')) {
            let obj = this;
            $(obj).addClass('listener');


            const delta = 6;
            let startX;
            let startY;

            obj.addEventListener('mousedown', function (event) {
                startX = event.pageX;
                startY = event.pageY;
            });

            obj.addEventListener('mouseup', function (event) {
                const diffX = Math.abs(event.pageX - startX);
                const diffY = Math.abs(event.pageY - startY);

                if (diffX < delta && diffY < delta) {
                    // Click!
                    // console.log(obj);
                    // let environment = obj.parentElement.parentElement.parentElement.children.indexOf(obj.parentElement.parentElement);
                    let environment = Array.prototype.indexOf.call(obj.parentElement.parentElement.parentElement.children, obj.parentElement.parentElement);
                    let placeholder = $(obj.firstElementChild.firstElementChild.firstElementChild.outerHTML).addClass('draggable')[0];
                    let placeholder2 = $(obj.firstElementChild.lastElementChild.firstElementChild.outerHTML).addClass('draggable')[0];
                    $(obj).remove();

                    console.log(placeholder);
                    console.log(placeholder2);
    
                    let string = `
                        <div class="givens-wrapper">
                        <div class="givens-title-wrapper">
                            <h3 class="givens-title">
                                Givens:
                            </h3>
                        </div>
                        <div class="givens-playground">
                    `;
                    
                    for (let i = 0; i < $('.givens-playground')[environment].children.length; i++) {
                        let newobj = $($('.givens-playground')[environment].children[i].outerHTML);
                        if (newobj.attr('class').substr(0, 3) === 'imp') {
                            newobj.addClass('adddrop');
                        }
                        string += newobj[0].outerHTML;
                    }
                    string += placeholder2.outerHTML + '</div></div>';
                    string += `
                    <div class="goals-wrapper">
                    <div class="goals-title-wrapper">
                        <h3 class="goals-title">
                            Goals:
                        </h3>
                    </div>
                    <div class="goals-playground">
                    `;
    
                    for (let i = 0; i < $('.goals-playground')[environment].children.length; i++) {
                        string += $('.goals-playground')[environment].children[i].outerHTML;
                    }
    
                    string += '</div></div>'
    
                    $('.givens-playground')[environment].appendChild(placeholder);
                    $('#content').append('<div class="environment">' + string + '</div>');
                    addClassesAndListeners();
                }   
            });
        }
    });
  }


main();
dragging();
addClassesAndListeners();