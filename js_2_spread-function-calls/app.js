Math.max(12,4,5,21,3,3,1,2,7,6,4,2,53456) // finds largest
Math.min(12,4,5,21,3,3,1,2,7,6,4,2,53456) // finds smallest

// using SPREAD to work with every element in an array
const nums = [12,4,5,21,3,3,1,2,7,6,4,2,53456]
Math.max(...nums)


// SPREAD will work with any value, not just numbers

// spread a string into individual characters
console.log(..."hello")