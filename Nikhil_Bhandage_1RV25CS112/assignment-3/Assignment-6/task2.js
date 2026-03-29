// Promise 1 → resolves after 1 second
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("User loaded");
    }, 1000);
});


const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Orders loaded");
    }, 2000);
});


const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Products loaded");
    }, 3000);
});

async function runAll() {
    
        const res1 = await p1;
        console.log(res1);

        const res2 = await p2;
        console.log(res2);

        const res3 = await p3;
        console.log(res3);

        console.log("All done!");}
   

runAll();