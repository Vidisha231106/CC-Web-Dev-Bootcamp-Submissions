let count = 0;

let timer = setInterval(() => {
    console.log("Tick...");
    count++;

    if (count === 5) {
        clearInterval(timer);
        console.log("Stopped!");
    }
}, 1000);