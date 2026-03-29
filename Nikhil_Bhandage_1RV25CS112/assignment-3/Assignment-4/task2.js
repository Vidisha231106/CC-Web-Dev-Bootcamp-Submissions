let success = true;

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
            resolve("Operation Successful!");
        } else {
            reject("Operation Failed!");
        }
    }, 2000);
});

myPromise
    .then(result => {
        console.log("Got result:", result);
        return result.toUpperCase();
    })
    .then(upper => {
        console.log("Uppercased:", upper);
        return "Done: " + upper;
    })
    .then(finalMsg => {
        console.log(" Final:", finalMsg);
    })
    .catch(error => {
        console.log(error);
    });