// take an object
const user = {
  email: 'email@domain.com',
  password: 'secure',
  firstName: 'Mark',
  lastName: 'Freeman',
  born: 1900,
  died: 'false',
  bio: 'Totally awesome dude',
  city: 'San Diego',
  state: 'California'
}

const user2 = {
  email: 'shauni@baywatch.com',
  firstName: 'Erika',
  lastName: 'Eleniak',
  born: 1980,
  city: "Gold Beach",
  state: 'California'
}

// destructure the object by calling out properties

// const { email, firstName, lastName, city, state } = user;

// destructure and rename to new variable other than existing key
// this time we extract the value for 'born' but instead of assigning that value to a new variable with the same name as the key 'born', we assign it to 'birthYear' when destructuring: 

// const { born: birthYear, died: deathYear } = user;

// destructur and add defaults
const { city, state, died = 'still going' } = user2