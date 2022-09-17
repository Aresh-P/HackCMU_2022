class Name {
    constructor(nameStr) {
        if (nameStr === 'P' || nameStr === 'Q' || nameStr === 'R' || nameStr === 'S') {
            this.nameStr = nameStr;
        } else {
            throw nameStr+' is not a valid atom name.';
        }
    }
}
