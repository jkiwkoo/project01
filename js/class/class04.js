class React {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    action() {
        return this.width * this.height;
    }
}

const myReact = new React(100, 200);
console.log(myReact.action());

class NumPoly extends React {
    constructor(width, height, num) {
        super(width, height);
        this.num = num;
    }
    action() {
        return this.width * this.height * this.num;
    }
}

const myPoly = new NumPoly(100, 300, 3);
console.log(myPoly.action());
