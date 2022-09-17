class Machine extends Obj {
    constructor(x, y, leftobj, rightobj, connect, element) {
        super(x, y, element);
        this.leftobj = leftobj;
        this.rightobj = rightobj;
        this.connect = connect;
    }
}