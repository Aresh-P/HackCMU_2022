let currentLevel;
let environments = [];

let exampleenvironments = [
    {
        givens: [
            'p',
            {
                left: 'p',
                right: 'q',
                connect: 'imp'
            },
            {
                left: {
                    left: 'p',
                    right: 'q',
                    connect: 'imp'
                },
                right: 'p',
                connect: 'and'
            }
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

function main() {
    currentLevel = new Level(exampleenvironments);
    $('body').append(currentLevel.element);
}

function dragMoveListener (event) {
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
        move: dragMoveListener 
    }
});

interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '.p-atom',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:

    ondropactivate: function (event) {
        // (event.target).classList.add('atom-active');
        
    },
    ondragenter: function (event) {
        // interact(event.relatedTarget).unset();
        // var draggableElement = event.relatedTarget
        // var dropzoneElement = event.target

        // // feedback the possibility of a drop
        // dropzoneElement.classList.add('drop-target')
        // draggableElement.classList.add('can-drop')
        // draggableElement.textContent = 'Dragged in'
    },
    // ondragleave: function (event) {
    // // remove the drop feedback style
    // event.target.classList.remove('drop-target')
    // event.relatedTarget.classList.remove('can-drop')
    // event.relatedTarget.textContent = 'Dragged out'
    // },
    ondrop: function (event) {
        (event.relatedTarget).classList.add('atom-active');
        (event.relatedTarget).classList.remove('draggable');
        // (event.relatedTarget).transform.parent = (event.target).transform;
        (event.relatedTarget).setAttribute('data-x', 0);
        (event.relatedTarget).setAttribute('data-y', 0);
        (event.relatedTarget).style.transform = "";
        (event.target).appendChild(event.relatedTarget);
    // event.relatedTarget.textContent = 'Dropped'
    },
    // ondropdeactivate: function (event) {
    // // remove active dropzone feedback
    // event.target.classList.remove('drop-active')
    // event.target.classList.remove('drop-target')
    // }
});