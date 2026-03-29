//let success = true;
 let success = false;

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
            resolve("Operation Successful!");
        } else {   reject("Operation Failed!");
        }  }, 2000);});


async function runOperation() {
    try {
        let result = await myPromise; 
        console.log(result);
    } catch (error) {
        console.log(error);}}

runOperation();