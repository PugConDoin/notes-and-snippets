const feline = { legs: 4, family: 'Felidae'};
const canine = { isFurry: true, family: 'Caninae'};

// make a new object with same properties
const catDog = {...feline, ...canine}
console.log(catDog)

// take user submitted details and...
const dataFromForm = {
  email: 'me@me.com',
  password: 'tricky',
  username: 'uptownfunk'
}

// ...use SPREAD to copy that array of data, add our own and create a new user Object
const newUser = { ...dataFromForm, id: 1234, isAdmin: false }
console.log(newUser)