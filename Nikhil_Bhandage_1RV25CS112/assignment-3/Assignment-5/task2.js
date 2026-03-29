
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("User loaded");
    }, 1000);
});


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Orders loaded");
    }, 2000);
});


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Products loaded");
    }, 3000);
});


Promise.race([p1, p2, p3])
    .then((result) => {
         console.log("Winner:", result);
    })
    .catch((err) => {
        console.error(err);
    });