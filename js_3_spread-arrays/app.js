const cats = ['purrsalot', 'meowsalot', 'playsalot']
const dogs = ['barksalot', 'runsalot', 'sleepsalot']

const allCats = [...cats]
const allPets = [...cats, ...dogs, 'anything']

console.log(allPets);
