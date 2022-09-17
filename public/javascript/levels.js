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
                },
                {
                    left: 'q',
                    connect: 'imp',
                    right: 's'
                }
            ],
            goals:
            [
                {
                    left: 'r',
                    connect: 'or',
                    right: 's'
                }
            ]
        }
    ],
    // level 7
    [
        // env 1
        {
            givens:
            [
                {
                    left: 'p',
                    connect: 'imp',
                    right: 'q'
                },
                {
                    left: 'q',
                    connect: 'imp',
                    right: 'r'
                }
            ],
            goals:
            [
                {
                    left: 'p',
                    connect: 'imp',
                    right: 'r'
                }
            ]
        }
    ],
    // level 8
    [
        // env 1
        {
            givens:
            [
                {
                    left: {
                        left: 'p',
                        connect: 'and',
                        right: 'q'
                    },
                    connect: 'and',
                    right: 'r'
                }
            ],
            goals:
            [
                {
                    left: 'p',
                    connect: 'and',
                    right: {
                        left: 'q',
                        connect: 'and',
                        right: 'r'
                    }
                }
            ],
        },
        // env 2
        {
            givens:
            [
                {
                    left: {
                        left: 'p',
                        connect: 'or',
                        right: 'q'
                    },
                    connect: 'or',
                    right: 'r'
                }
            ],
            goals:
            [
                {
                    left: 'p',
                    connect: 'or',
                    right: {
                        left: 'q',
                        connect: 'or',
                        right: 'r'
                    }
                }
            ],
        },
    ],
    // level 9
    [
        // env 1
        {
            givens:
            [
                {
                    left: {
                        left: 'p',
                        connect: 'and',
                        right: 'q'
                    },
                    connect: 'or',
                    right: 'r'
                }
            ],
            goals:
            [
                {
                    left: {
                        left: 'p',
                        connect: 'or',
                        right: 'r'
                    },
                    connect: 'and',
                    right: {
                        left: 'q',
                        connect: 'or',
                        right: 'r'
                    }
                }
            ],
        },
        // env 2
        {
            givens:
            [
                {
                    left: {
                        left: 'p',
                        connect: 'or',
                        right: 'q'
                    },
                    connect: 'and',
                    right: 'r'
                }
            ],
            goals:
            [
                {
                    left: {
                        left: 'p',
                        connect: 'and',
                        right: 'r'
                    },
                    connect: 'or',
                    right: {
                        left: 'q',
                        connect: 'and',
                        right: 'r'
                    }
                }
            ]
        }
    ]
];