function demo() {
    var x = 10;
    let y = 20;
    const z = 30;

    console.log("Before if block:");
    console.log("x:", x);
    console.log("y:", y);
    console.log("z:", z);

    if (true) {
        var x = 50;
        let y = 40;
        console.log("Inside if block:");
        console.log("x:", x);
        console.log("y:", y);
        console.log("z:", z);
    }

    console.log("After if block:");
    console.log("x:", x);
    console.log("y:", y);
    console.log("z:", z);
}

demo();
