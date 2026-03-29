let division=(a,b)=>{
 if(b==0){
    throw new Error("can't be divided by zero");
    return a/b;
}}

try{let result = division(10, 0);
    console.log(result);}
    catch(error){
        console.log(error.message);
    }
