
// let ticks=0;
// let main=setInterval(()=>{ if(ticks<5){console.log("Tick...");
//     ticks++;
// } 
// else{ console.log("Stopped!");
//     clearInterval(main)}},1000);

    let another_method_i_got=setInterval(()=>{console.log("tick ...");},1000);
   
    setTimeout(()=>{ console.log("Stopped!");clearInterval( another_method_i_got)},6000);
