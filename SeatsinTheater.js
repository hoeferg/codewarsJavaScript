//find how many squares are in the blue square and return it as a function
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows -row);
}

// You are in the middle seat
// you can multiply nCols and nRows to find all the seats in the theater
// Then you want to subtract the col and rows to get just the area you want.
// When you subtrated the row and col you subtracted the col that your end and you need to add one to include it

//Can be written as on liner
const seatsInTheater = (nCols, nRows, col, row) =>
    (nCols - col + 1) * (nRows -row);
