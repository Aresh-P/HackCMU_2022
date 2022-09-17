class Obj {
    constructor(x, y, width, height, element) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.selected = false;
        this.element = element;
    }

    isSelected() {
        return this.selected;
    }
}