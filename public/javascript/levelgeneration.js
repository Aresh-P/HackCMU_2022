function createobj(keyword) {
    if (typeof keyword === 'string') {
        return new Atom(keyword.toUpperCase());
    } else {
        return new Machine(createobj(keyword[0]), keyword[1], createobj(keyword[2]));
    }
}