class Obj {
    constructor(x, y, element) {
        this.x = x;
        this.y = y;
        this.selected = false;
        this.element = element;
    }

    isSelected() {
        return this.selected;
    }
}