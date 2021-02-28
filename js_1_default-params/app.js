// function that rolls a die with any number of sides, defaulting to 6 sides
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1
}

// roll a 20-sided die
rollDie(20)


