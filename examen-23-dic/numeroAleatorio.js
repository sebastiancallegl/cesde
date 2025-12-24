function random() {
    const date = new Date();
    const stringDate = date.toISOString().split("");
    console.log(date.toISOString())
    stringDate.pop()
    const newArr = stringDate.reverse()
    let number = `${newArr[2]}${newArr[1]}${newArr[0]}`

    number = Number(number);

    if (number !== 100) {
        return number % 100;
    } else {
        return number;
    }
}

for(let i = false; i === false;) {
    const number = random();
    console.log(number)

    if(number === 100) {
        i = true;
    }
}