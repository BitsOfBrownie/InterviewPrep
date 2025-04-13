// Created variable for size
let size = 8;

// Keeps track of when to alternate
let count = size/2;
let swap = true;

// String to build board
let stringForOutput = "";

// Cycles through the half the size of the whole board of charactors length
for (let i = 0; i < (size*size)/2; i++) {

    // Checks to see if it is time to swap patterns and add a break
    if (i === count) {
        stringForOutput += "\n";
        count = count + size/2;
        swap = !swap;
    }

    // Adds appropriate pattern
    if (swap) {
        stringForOutput += " #";
    }

    // Adds appropriate pattern
    else {
        stringForOutput += "# ";
    }
}
// Prints finished board
console.log(stringForOutput);