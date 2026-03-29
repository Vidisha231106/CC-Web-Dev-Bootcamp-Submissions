// 
async function safeDivide(a, b) {
    try {
        let result = await new Promise((resolve, reject) => {
            if (b === 0) {
                reject("Cannot divide by zero!");
            } else {
                resolve(a / b);
            }
        });

        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error);}}safeDivide(10, 2);safeDivide(10, 0); 