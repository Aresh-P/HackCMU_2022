class Machine extends Obj {
    constructor(x, y, width, height, leftobj, rightobj, connect) {
        super(x, y, width, height);
        this.leftobj = leftobj;
        this.rightobj = rightobj;
        this.connect = connect;
    }
}