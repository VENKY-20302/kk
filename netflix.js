const movieRows = document.getElementById('movieRows');
const searchInput = document.getElementById('searchInput');

const categories = [
  {
    title: 'Trending Now',
    movies: [
      { title: 'Red Horizon', year: '2024', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1' },
      { title: 'Midnight Chase', year: '2023', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/YE7VzlLtp-4?autoplay=1&mute=1' },
      { title: 'The Last Signal', year: '2022', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/3fumBcKC6RE?autoplay=1&mute=1' },
      { title: 'Neon City', year: '2024', image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1' },
      { title: 'Phantom Lake', year: '2023', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/l482T0yNkeo?autoplay=1&mute=1' }
    ]
  },
  {
    title: 'Action & Adventure',
    movies: [
      { title: 'Sky Fortress', year: '2024', image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&mute=1' },
      { title: 'Pulse Runner', year: '2023', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/2vjPBrBU-TM?autoplay=1&mute=1' },
      { title: 'Iron Echo', year: '2022', image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/09R8_2nJtjg?autoplay=1&mute=1' },
      { title: 'Stone Harbor', year: '2024', image: 'https://images.unsplash.com/photo-1448495661927-1c0af0d69986?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/fLexgOxsZu0?autoplay=1&mute=1' }
    ]
  },
  {
    title: 'Dramas',
    movies: [
      { title: 'Quiet Storm', year: '2023', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1&mute=1' },
      { title: 'Broken Promises', year: '2024', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/kXYiU_JCYtU?autoplay=1&mute=1' },
      { title: 'City of Marbles', year: '2022', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/3tmd-ClpJxA?autoplay=1&mute=1' },
      { title: 'Lost Atlas', year: '2023', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/60ItHLz5WEA?autoplay=1&mute=1' }
    ]
  }
];

const videoOverlay = createVideoOverlay();

function createMovieCard(movie) {
  const card = document.createElement('article');
  card.className = 'movie-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.addEventListener('click', () => showVideo(movie));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showVideo(movie);
    }
  });

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

function createVideoOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'videoOverlay';
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.92);
    padding: 1.5rem;
    z-index: 1000;
    overflow: auto;
  `;

  const content = document.createElement('div');
  content.style.cssText = `
    position: relative;
    width: min(100%, 1100px);
    max-width: 1100px;
    aspect-ratio: 16 / 9;
    background: #000;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.45);
  `;

  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.setAttribute('aria-label', 'Close video');
  closeButton.style.cssText = `
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.75rem;
    height: 2.75rem;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
  `;
  closeButton.addEventListener('click', hideVideo);

  const iframe = document.createElement('iframe');
  iframe.id = 'moviePlayer';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.frameBorder = '0';
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  iframe.allowFullscreen = true;
  iframe.style.display = 'block';

  content.appendChild(closeButton);
  content.appendChild(iframe);
  overlay.appendChild(content);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      hideVideo();
    }
  });

  document.body.appendChild(overlay);
  return overlay;
}

function showVideo(movie) {
  const iframe = document.getElementById('moviePlayer');
  if (!iframe) {
    return;
  }

  iframe.src = movie.video || movie.videoUrl || '';
  videoOverlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function hideVideo() {
  const iframe = document.getElementById('moviePlayer');
  if (iframe) {
    iframe.src = '';
  }
  videoOverlay.style.display = 'none';
  document.body.style.overflow = '';
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
