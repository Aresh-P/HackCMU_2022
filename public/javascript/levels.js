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
                {
                    left: 'p',
                    connect: 'imp',
                    right: 'q'
                }
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
                {
                    left: 'p',
                    connect: 'and',
                    right: 'q'
                }
            ],
            goals:
            [
                'p', 'q'
            ]
        }
    ],
    // level 4
    [
        // env 1
        {
            givens:
            [
                {
                    left: 'p',
                    connect: 'or',
                    right: 'q'
                },
                {
                    left: 'p',
                    connect: 'imp',
                    right: 'r'
                },
                {
                    left: 'q',
                    connect: 'imp',
                    right: 'r'
                }
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
                {
                    left: 'p',
                    connect: 'and',
                    right: 'q'
                }
            ],
            goals:
            [
                'p', 'q'
            ]
        }
    ],
    // level 5
    [
        // env 1
        {
            givens:
            [
                'p','q'
            ],
            goals:
            [
                {
                    left: 'p',
                    connect: 'and',
                    right: 'q'
                }
            ]
        }
    ],
    // level 6
    [
        // env 1
        {
            givens:
            [
                {
                    left: 'p',
                    connect: 'or',
                    right: 'q'
                },
                {
                    left: 'p',
                    connect: 'imp',
                    right: 'r'
                }
            ],
            goals:
            [
                {
                    left: 'p',
                    connect: 'and',
                    right: 'q'
                }
            ]
        }
    ],
];