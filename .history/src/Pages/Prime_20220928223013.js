import React from "react";

function Prime(){
    //prime 1-1000 written
    var n = 1000;

   for (let i= 0; i < n; i++) {
    if(n % i === 0) {
        console.log(i)
    }
   }
   return `${n} is a prime number`
}
//math right, need to print on page. 
console.log(Prime(1));


export default Prime;