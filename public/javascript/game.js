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
                'and',
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
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
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
                // let goals = document.getElementsByClassName("goals-wrapper");
                let givens = (event.target).parentElement;
                console.log(givens);
                
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
                console.log(goalsLeft);
                if ((leftCoord + width) >= (goalsLeft * .965)) {
                //     console.log("in GOALS!");
                    let classStr = $(event.target).attr("class");
                    console.log(classStr);
                    let spaceIdx = classStr.indexOf(' ', 0);
                    let constructorStr = classStr.substr(0, spaceIdx);
                    console.log(constructorStr);
                    // if (currentLevel.environments[envIdx].goals.includes(constructorStr))
                    console.log(goals);
                    console.log($(goals).children(".goals-playground")[0]);
                    var children = ($(goals).children(".goals-playground")[0]).children;
                    for(var i=0; i<children.length; i++){
                        var child = children[i];
                        let compareClassString = $(child).attr("class");
                        console.log(compareClassString);
                        let compareSpaceIdx = compareClassString.indexOf(' ', 0);
                        let compareConstructorStr = compareClassString.substr(0, compareSpaceIdx);
                        console.log(compareConstructorStr);
                        if (compareConstructorStr === constructorStr) {
                            console.log("YOU HAVE WON!")
                        }
                    }
                    // for (const obj in ($(goals).children(".goals-playground")[0])) {
                    //     console.log(obj);
                    }
                }
                // event.target.style.transform = 'translate(' + $(event.target).attr('data-x-revert') + 'px, ' + $(event.target).attr('data-y-revert') + 'px)'
                // $(event.target).attr('data-x', $(event.target).attr('data-x-revert'));
                // $(event.target).attr('data-y', $(event.target).attr('data-y-revert'));
                // $('#kill').remove();
            }
        });
}

function addClasses() {
    $('.givens-playground > *').each(function() {
        this.addEventListener("dblclick", event => {
            // console.log("Double-click detected");

        })
        let classString = $(this).attr('class');
        if (classString.substr(0, 3) === 'imp') {
            $(this).children('.connector-wrapper').children('.connector-left').addClass('inactive-constructor');
    
    
            let leftindex = classString.lastIndexOf('left-');
            let spaceindex = classString.indexOf(' ', leftindex);
            let acceptstr = '.' + classString.substr(leftindex + 5, spaceindex - (leftindex + 5));
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
                    $(event.relatedTarget.parentElement).append($(event.target.parentElement.lastElementChild.firstElementChild.outerHTML).css({position: 'absolute', top: offset.top + 6, left: offset.left + bigwidth + 10}).addClass('draggable'));
                }
            });
        }
    });
}


main();
dragging();
addClasses();