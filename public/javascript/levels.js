var levels = [
    // level 1
    [
        // env 1
        {
            givens:
            [
		'p'
	    ],
            goals:
            [
		'p'
	    ]
        }
    ],
    // level 2
    [
        // env 1
        {
            givens:
            [
                ['p', 'imp', 'q'],
                'p'
            ],
            goals:
            [
		'q'
	    ]
        }
    ],
    // level 3
    [
        // env 1
        {
            givens:
            [
                ['p', 'and', 'q']
            ],
            goals:
            [
            ['p','or','q']
            ]
        }
    ],
    // level 4
    [
        // env 1
        {
            givens:
            [
                ['p', 'or', 'q'],
                ['p', 'imp', 'r'],
		        ['q', 'imp', 'r']
            ],
            goals:
            [
		        'r'
	        ]
        }
    ],
    // level 5
    [
        // env 1
        {
            givens:
            [
                ['p', 'and', 'q'],
                ['p', 'imp', 'r'],
                ['q', 'imp', 'r']
	        ],
            goals:
            [
                'r'
            ]
        }
    ],
    // level 6
    [
        // env 1
        {
            givens:
            [
                ['p', 'or', 'q'],
                ['p', 'imp', 'r'],
                ['q', 'imp', 's']
            ],
            goals:
            [
		        ['r', 'or', 's']
            ]
        }
    ],
    // level 7
    [
        // env 1
        {
            givens:
            [
		        ['p', 'or', 'q'],
                ['p', 'imp', 'r'],
		        ['q', 'imp', 's']
            ],
            goals:
            [
		        ['r', 'or', 's']
            ]
        }
    ],
    // level 8
    [
        // env 1
        {
            givens:
            [
                'p', 
                [['p', 'imp', ['q', 'and', 'r']],'or',[['r', 'imp', 'q'], 'and', ['p', 'imp', 'r']]],
                ['q', 'imp', ['r', 'imp', 's']]
            ],
            goals:
            [
                's'
            ]
        }
    ],
    // level 9
    [
        // env 1
        {
            givens:
            [
		        [['p', 'or', 'q'], 'or', 'r']
            ],
            goals:
            [
		        ['p', 'or', ['q', 'or', 'r']]
            ]
        }
    ],
    // level 10
    [
        // env 1
        {
            givens:
            [
                ['p', 'imp', 'q'],
                ['p', 'imp', 'r'],
                ['q', 'imp', ['r', 'imp', ['s', 'or', 't']]],
                ['s', 'imp', 'p'], 
                ['t', 'imp', 'p']
            ],
            goals:
            [
                ['p', 'imp', ['s', 'or', 't']], 
                ['s', 'imp', 'q'], 
                ['t', 'imp', 'q'], 
                ['s', 'imp', 'r'], 
                ['t', 'imp', 'r'],  
                ['r', 'imp', ['q', 'imp', 'p']]
            ]
        },
        // env 2
        {
            givens:
            [
                ['p', 'imp', ['s', 'or', 't']], 
                ['s', 'imp', 'q'], 
                ['t', 'imp', 'q'], 
                ['s', 'imp', 'r'], 
                ['t', 'imp', 'r'],  
                ['r', 'imp', ['q', 'imp', 'p']]
            ],
            goals:
            [
                ['p', 'imp', 'q'],
                ['p', 'imp', 'r'],
                ['q', 'imp', ['r', 'imp', ['s', 'or', 't']]],
                ['s', 'imp', 'p'], 
                ['t', 'imp', 'p']
            ]
        }
    ]
];
