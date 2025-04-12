//cycles through designated number
for (let i = 1; i <= 100; i++){

    //checks if division remainder is 0
    if (i % 5 === 0 && i % 3 === 0){

        //prints appropriate message
        console.log(`Fizz Buzz ${i}`);
    }

    //checks if division remainder is 0
    else if (i % 5 === 0){

        //prints appropriate message
        console.log(`Buzz ${i}`);
    }

    //checks if division remainder is 0
    else if (i % 3 === 0){

        //prints appropriate message
        console.log(`Fizz ${i}`);
    }
}
