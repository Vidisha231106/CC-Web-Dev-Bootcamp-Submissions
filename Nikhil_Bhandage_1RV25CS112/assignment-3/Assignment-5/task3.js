
let p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("User loaded");
    }, 1000);});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server error");
    }, 2000);
});
const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {resolve("Products loaded");
    }, 3000);});


Promise.allSettled([p1, p2, p3])
    .then((results) => {results.forEach((res) => {
            if (res.status === "fulfilled") {
                console.log("fulfilled -", res.value);
            } else {      console.log("rejected  -", res.reason);
            }}); });