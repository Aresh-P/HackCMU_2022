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
                // event.target.style.transform = 'translate(' + $(event.target).attr('data-x-revert') + 'px, ' + $(event.target).attr('data-y-revert') + 'px)'
                // $(event.target).attr('data-x', $(event.target).attr('data-x-revert'));
                // $(event.target).attr('data-y', $(event.target).attr('data-y-revert'));
                // $('#kill').remove();
            }
        }
    });
}

function addClasses() {
    $('.givens-playground > *').each(function() {
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
                    // $(this).children('.connector-wrapper').children('.connector-left').removeClass('inactive-constructor');
    
                    // event.target.classList.remove('inactive-constructor');
                    $(event.target.parentElement).width();
                    let newx = $(event.relatedTarget).attr('data-x') - $(event.target).width() - 20;
                    let newy = $(event.relatedTarget).attr('data-y');
                    event.relatedTarget.style.transform = 'translate(' + newx + 'px, ' + newy + 'px)'
                    $(event.relatedTarget).attr('data-x', newx);
                    $(event.relatedTarget).attr('data-y', newy);
                    
                    let bigwidth = $(event.target.parentElement).width();
                    let offset = getOffset(event.target);
                    $(event.relatedTarget.parentElement).prepend($(event.target.parentElement.lastElementChild.firstElementChild.outerHTML).css({position: 'absolute', top: offset.top, left: offset.left + bigwidth + 10}).addClass('draggable'));
                }
            });
        }
    });
}


main();
dragging();
addClasses();