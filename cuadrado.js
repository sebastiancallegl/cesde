function createSquare(num) {
    console.log("*".repeat(num));
    for (let i = 0; i < num - 2; i++) {
        const patron = "*" + " ".repeat(num - 2) + "*"
        console.log(patron);
    }
    console.log("*".repeat(num));
}


createSquare(20);