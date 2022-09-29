import React from "react";

function Prime() {
    //prime 1-1000 written, first indicates where to start and when to end loop, second variable is indicating how to show if prime. 
    for (var n = 2; n <= 1000; n++) {
        for (var i = 2; i < n; i++) {
            if (n % i === 0)
            {
                break;
            }
        }
        if (n === i)
        {
        document.write(i+"<br>");
        }
    }

}
//math right, need to print on page//in console 
console.log(Prime(2));


export default Prime;