const movieRows = document.getElementById('movieRows');
const searchInput = document.getElementById('searchInput');

const categories = [
  {
    title: 'Trending Now',
    movies: [
      { title: 'Red Horizon', year: '2024', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80' },
      { title: 'Midnight Chase', year: '2023', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80' },
      { title: 'The Last Signal', year: '2022', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80' },
      { title: 'Neon City', year: '2024', image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80' },
      { title: 'Phantom Lake', year: '2023', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    title: 'Action & Adventure',
    movies: [
      { title: 'Sky Fortress', year: '2024', image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80' },
      { title: 'Pulse Runner', year: '2023', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80' },
      { title: 'Iron Echo', year: '2022', image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80' },
      { title: 'Stone Harbor', year: '2024', image: 'https://images.unsplash.com/photo-1448495661927-1c0af0d69986?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    title: 'Dramas',
    movies: [
      { title: 'Quiet Storm', year: '2023', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80' },
      { title: 'Broken Promises', year: '2024', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80' },
      { title: 'City of Marbles', year: '2022', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80' },
      { title: 'Lost Atlas', year: '2023', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];

function createMovieCard(movie) {
  const card = document.createElement('article');
  card.className = 'movie-card';

  const image = document.createElement('img');
  image.src = movie.image;
  image.alt = `${movie.title} poster`;
  card.appendChild(image);

  const info = document.createElement('div');
  info.className = 'movie-info';
  info.innerHTML = `<h3>${movie.title}</h3><p>${movie.year}</p>`;
  card.appendChild(info);

  return card;
}

function createRow(category) {
  const section = document.createElement('section');
  section.className = 'row';

  const title = document.createElement('h2');
  title.className = 'row-title';
  title.textContent = category.title;

  const rowScroll = document.createElement('div');
  rowScroll.className = 'row-scroll';

  category.movies.forEach((movie) => {
    rowScroll.appendChild(createMovieCard(movie));
  });

  section.appendChild(title);
  section.appendChild(rowScroll);
  return section;
}

function renderRows(filterText = '') {
  movieRows.innerHTML = '';
  const normalizedFilter = filterText.trim().toLowerCase();

  categories.forEach((category) => {
    const filteredMovies = category.movies.filter((movie) =>
      movie.title.toLowerCase().includes(normalizedFilter)
    );

    if (filteredMovies.length === 0) {
      return;
    }

    movieRows.appendChild(createRow({ title: category.title, movies: filteredMovies }));
  });

  if (movieRows.children.length === 0) {
    const emptyState = document.createElement('p');
    emptyState.style.color = '#9ca3af';
    emptyState.textContent = 'No titles match your search. Try another keyword.';
    movieRows.appendChild(emptyState);
  }
}

searchInput.addEventListener('input', (event) => {
  renderRows(event.target.value);
});

renderRows();
