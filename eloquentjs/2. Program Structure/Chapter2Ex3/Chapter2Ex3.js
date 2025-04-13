// Created variable for size and alternate levels of board
let size = 8;
let evenStringForOutput = " #"
let oddStringForOutput = "# "

// Create the primary loop for length and width
for (let i = 0; i < size; i++ ) {

    // Checks if size is even to determine what to print
    if (size % 2 === 0) {
        
        // Checks if current loop is even for dependent output
        if (i % 2 === 0) {

            // Prints characters for chosen width
            console.log(evenStringForOutput.repeat(size/2));
        }
        else {
            // Prints characters for chosen width
            console.log(oddStringForOutput.repeat(size/2));
        }
    }

    // "size" is odd
    else {

        // Checks if current loop is even for dependent output
        if (i % 2 === 0) {

            // Prints characters for chosen width with compensation for odd
            console.log(evenStringForOutput.repeat((size -1)/2)+"#");
        }
        else {
            
            // Prints characters for chosen width with compensation for odd
            console.log(oddStringForOutput.repeat((size -1)/2)+" ");
        }
    }
}
