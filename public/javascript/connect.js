class Connect {
    constructor(connectStr) {
        if (connectStr === 'and' || connectStr === 'or' || connectStr === 'imp') {
            this.connectStr = connectStr;
        } else {
            throw connectStr + ' is not a valid connector.';
        }
    }
}
