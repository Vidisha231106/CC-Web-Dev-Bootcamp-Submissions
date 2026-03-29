let i=5;
let counter=setInterval(()=>{
   
     console.log(i);
     
     if(i==0){
        console.log("Time's Up");
        clearInterval(counter);
     }i--;
    
},1000)