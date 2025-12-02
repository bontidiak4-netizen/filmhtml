const movies = [
  {"id":1,"title":"Csillagok háborúja","year":1977,"genre":"Sci-Fi"},
  {"id":2,"title":"A remény rabjai","year":1994,"genre":"Dráma"},
  {"id":3,"title":"A keresztapa","year":1972,"genre":"Krimi"},
  {"id":4,"title":"Mátrix","year":1999,"genre":"Sci-Fi"},
  {"id":5,"title":"Titanic","year":1997,"genre":"Romantikus"},
  {"id":6,"title":"Forrest Gump","year":1994,"genre":"Dráma"},
  {"id":7,"title":"Harry Potter és a bölcsek köve","year":2001,"genre":"Fantasy"},
  {"id":8,"title":"A Gyűrűk Ura: A Gyűrű Szövetsége","year":2001,"genre":"Fantasy"},
  {"id":9,"title":"Pókember","year":2002,"genre":"Akció"},
  {"id":10,"title":"Az oroszlánkirály","year":1994,"genre":"Animáció"},
  {"id":11,"title":"A sötét lovag","year":2008,"genre":"Akció"},
  {"id":12,"title":"Inception","year":2010,"genre":"Sci-Fi"},
  {"id":13,"title":"Joker","year":2019,"genre":"Dráma"},
  {"id":14,"title":"Gladiátor","year":2000,"genre":"Akció"},
  {"id":15,"title":"Toy Story","year":1995,"genre":"Animáció"}
];
let favorites = [];

function renderMovies() {
    const list = document.getElementById('movie-list');
    list.innerHTML = '';
    movies.forEach(movie => {
        if (favorites.find(fav => fav.id === movie.id)) return;
        const li = document.createElement('li');
        li.textContent = `${movie.title} (${movie.year}) [${movie.genre}] `;
        const btn = document.createElement('button');
        btn.textContent = 'Kedvenc';
        btn.onclick = () => addToFavorites(movie.id);
        li.appendChild(btn);
        list.appendChild(li);
    });
}

function renderFavorites() {
    const list = document.getElementById('favorites-list');
    list.innerHTML = '';
    favorites.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.title} (${movie.year}) [${movie.genre}] `;
        const btn = document.createElement('button');
        btn.textContent = 'Eltávolít';
        btn.onclick = () => removeFromFavorites(movie.id);
        li.appendChild(btn);
        list.appendChild(li);
    });
}

function addToFavorites(id) {
    const movie = movies.find(m => m.id === id);
    if (movie && !favorites.find(fav => fav.id === id)) {
        favorites.push(movie);
        renderMovies();
        renderFavorites();
    }
}

function removeFromFavorites(id) {
    favorites = favorites.filter(fav => fav.id !== id);
    renderMovies();
    renderFavorites();
}

window.onload = function() {
    renderMovies();
    renderFavorites();
};
