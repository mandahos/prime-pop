import React from "react";

function Prime(n){
    //prime 1-1000 written
   if(n < 2)
    return `${n} is not a prime`

   for (let i= 2; i < n; i++) {
    if(n % i === 0) {
        return `${n} is not a prime number`
    }
   }
   return `${n} is a prime number`
}
//ath right, need to print on page. 
console.log(Prime(1));


export default Prime;