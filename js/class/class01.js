function User(first, last) {
    this.first = first;
    this.last = last;
}

User.prototype.getCall = function () {
    document.write(`<p>${this.first} : ${this.last}</p>`);
};

const myName = [
    new User('red', 'lee'),
    new User('blue', 'kim'),
    new User('pink', 'park'),
];

myName[0].getCall();

function Picture(pic, title, artist, year) {
    this.pic = pic;
    this.title = title;
    this.artist = artist;
    this.year = year;
}
