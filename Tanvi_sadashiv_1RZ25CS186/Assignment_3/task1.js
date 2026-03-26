function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    let result = divide(10, 2);
    console.log("Result: " + result);
} catch (error) {
    console.log("Error: " + error.message);
}

try {
    let result = divide(10, 0);
    console.log("Result: " + result);
} catch (error) {
    console.log("Error: " + error.message);
}