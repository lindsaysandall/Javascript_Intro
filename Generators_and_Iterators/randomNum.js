function* randomNum() {
    while(true) {
        yield Math.floor(Math.random() * 100);
    }
}

const it = randomNum();
function getRandomNum() {
    return it.next().value
}

console.log(getRandomNum())