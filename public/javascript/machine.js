class Machine extends Obj {
    constructor(x, y, width, height, leftobj, rightobj, connect, element) {
        super(x, y, width, height, element);
        this.leftobj = leftobj;
        this.rightobj = rightobj;
        this.connect = connect;
    }
}