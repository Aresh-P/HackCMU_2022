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
                'p',
                ['p', 'imp', 'q']
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
		'p',
		'q'
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
		'p',
		'q'
	    ],
            goals:
            [
		['p', 'and', 'q']
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
		['p', 'imp', 'q'],
		['q', 'imp', 'r']
            ],
            goals:
            [
		['p', 'imp', 'r']
            ]
        }
    ],
    // level 8
    [
        // env 1
        {
            givens:
            [
		[['p', 'and', 'q'], 'and', 'r']
            ],
            goals:
            [
		['p', 'and', ['q', 'and', 'r']]
            ]
        },
        // env 2
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
    // level 9
    [
        // env 1
        {
            givens:
            [
                [['p', 'and', 'q'], 'or', 'r']
            ],
            goals:
            [
                [['p', 'or', 'r'], 'and', ['q', 'or', 'r']]
            ]
        },
        // env 2
        {
            givens:
            [
                [['p', 'or', 'q'], 'and', 'r']
            ],
            goals:
            [
                [['p', 'and', 'r'], 'or', ['q', 'and', 'r']]
            ]
        }
    ]
];