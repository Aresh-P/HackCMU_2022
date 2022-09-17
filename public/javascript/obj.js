// DO NOT INSTANTIATE
class Obj {
    constructor() {
	if (this.constructor == Obj) {
	    throw 'Can\'t instantiate Obj, use Atom or Machine instead.';
	}
    }
}
