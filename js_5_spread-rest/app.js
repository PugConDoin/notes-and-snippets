// the following will not workk because arguments is not an array and it doesn't have a reduce method. 
// function sum () {
//   return arguments.reduce( (total, el) => total + el);
// }

// this is where we use the REST operator
// the REST operator looks like spread ... but we use it with the parameters of a function to take in everything that's been passed into that parameter and makes an array from everything that's been passed
function sum (...nums) {
  return nums.reduce( (total, el) => total + el);
}

// now sum will work with many arguments passed into a single parameters 
console.log(sum(1,2,3,4,5))

function raceResults (gold, silver, ...restOfField) {
  console.log(`GOLD goes to: ${gold}`);
  console.log(`SILVER goes to: ${silver}`);
  console.log(`Thanks to: ${restOfField} who also took part.`);
}

