import React from "react";

function Prime(n){
   if(n < 2)
    return `${n} is not a prime`

   for (let i= 2; i < n; i++) {
    if(n % i === 0) {
        return `${n} is not a prime number`
    }
   }
   return `${n} is a prime number`
}

console.log()

export default Prime;