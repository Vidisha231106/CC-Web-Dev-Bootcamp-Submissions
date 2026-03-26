let count = 5;

let timer = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
        console.log("Time's up!");
        clearInterval(timer);
    }
}, 1000);