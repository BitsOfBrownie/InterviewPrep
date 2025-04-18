for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        // Checks if division remainder for 5 and 3 is 0 and prints appropriate message
        console.log(`Fizz Buzz ${i}`);
    }
    else if (i % 5 === 0) {
        // Checks if division remainder is for 5 is 0 and prints appropriate message
        console.log(`Buzz ${i}`);
    }
    else if (i % 3 === 0) {
        // Checks if division remainder is for 3 is 0 and prints appropriate message
        console.log(`Fizz ${i}`);
    }
    else {
        // Prints appropriate non-Fizz non-Buzz number
        console.log(i); 
    }
}
