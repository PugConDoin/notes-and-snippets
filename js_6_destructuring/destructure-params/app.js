const movies = [
  {
    title: 'One',
    score: 98,
    year: 1984
  },
  {
    title: 'Two',
    score: 72,
    year: 1932
  },
  {
    title: 'Three',
    score: 67,
    year: 1974
  },
  {
    title: 'Four',
    score: 92,
    year: 2002
  },
  {
    title: 'Five',
    score: 91,
    year: 2008
  },
  {
    title: 'Six',
    score: 84,
    year: 1912
  },
  {
    title: 'Seven',
    score: 25,
    year: 1974
  }
]

// filter movies by rating
movies.filter((movie) => movies.score >= 90)
movies.filter(({ score }) => score >= 90)

movies.map(movie => {
  return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

// destructured method of movies map, must be inside parens and braces({  })
movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}`
})