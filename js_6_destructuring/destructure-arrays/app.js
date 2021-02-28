const scores = [91234, 81234, 71234, 61234, 51234, 41234, 31234, 21234, 11234]
// destructuring assings the values of an existing object to a new variable
const [first, second] = scores;
console.log(first);
console.log(second);

const raceResults = [ 'Mark', 'Jen', 'Shannon', 'Illy', 'Kit', 'Stickeer', 'Isla' ]
const [gold, silver, bronze] = raceResults;
console.log(gold);
console.log(silver);
console.log(bronze);

const [ fastest, ...everyoneElse ] = raceResults;
console.log(fastest);
console.log(everyoneElse);