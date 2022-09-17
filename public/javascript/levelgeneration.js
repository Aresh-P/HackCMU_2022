// let exampleenvironments = [
//     {
//         givens: [
//             'p',
//             {
//                 left: 'p',
//                 right: 'q',
//                 connect: 'imp'
//             },
//             {
//                 left: {
//                     left: 'p',
//                     right: 'q',
//                     connect: 'imp'
//                 },
//                 right: 'p',
//                 connect: 'and'
//             }
//         ],
//         goals: [
//             'q'
//         ]
//     },
//     {
//         givens: ['p'],
//         goals: ['p']
//     }
// ];

function createobj(keyword) {
    if (typeof keyword === 'string') {
        return new Atom(keyword.toUpperCase());
    } else {
        return new Machine(createobj(keyword[0]), keyword[1], createobj(keyword[2]));
    }
}

// function generateLevel(environments) {
//     newenvs = [];
//     for (let i = 0; i < environments.length; i++) {
//         let givens = environments[i].givens;
//         let goals = environments[i].goals;
//         let newgivens = [];
//         let newgoals = [];
//         for (let j = 0; j < givens.length; j++) {
//             let obj = createobj(givens[j]);
//             obj.element.addClass('draggable');
//             newgivens.push(obj);
//         }
//         for (let k = 0; k < goals.length; k++) {
//             let obj = createobj(goals[k]);
//             obj.element.addClass('greyed-out');
//             newgoals.push(obj);
//         }
//         let env = new Environment(newgivens, newgoals);
//         newenvs.push(env);
//     }
//     let level = new Level(newenvs);
//     // add level.element to html
// }