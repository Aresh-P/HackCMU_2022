class Obj {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.selected = false;
    }

    onmousedown() {
        this.selected = true;
        console.log('Mouse down on Obj');
    }

    onmouseup() {
        this.selected = false;
        console.log('Mouse up on Obj');
    }

    isSelected() {
        return this.selected;
    }
}