// Created variable for size
let size = 73;

// Keeps Track of Original Odd Status 
let oddSizeTracker = false;
if (size % 2 != 0) {
    size++;
    oddSizeTracker = true;
}
// Keeps track of when to alternate
let count = size / 2;
let swap = true;

// String to build board
let chessBoardStructure = "";

// Cycles through the half the size of the whole board of charactors length
for (let i = 0; i < (size * size) / 2; i++) {

    // Checks to see if it is time to swap patterns, checks for/modifies "size" if odd, and adds a break
    if (i === count) {
        if (oddSizeTracker === true) {
            chessBoardStructure = chessBoardStructure.slice(0,-1);
        }
        chessBoardStructure += "\n";
        count += size / 2;
        swap = !swap;
    }
    if (swap) {
        // Adds appropriate pattern
        chessBoardStructure += " #";
    }
    else {
        // Adds appropriate pattern
        chessBoardStructure += "# ";
    }
}
// Prints finished board
console.log(chessBoardStructure);
