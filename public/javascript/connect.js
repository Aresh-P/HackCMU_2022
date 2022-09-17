class Connect {
    constructor(name) {
        if (name === 'and' || name === 'or' || name === 'imp') {
            this.name = name;
        } else {
            throw name + ' is not a valid connector.';
        }
    }
}