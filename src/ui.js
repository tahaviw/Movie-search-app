export function renderCards(movies) {
    const cardsContainer = document.querySelector('#results');
    cardsContainer.innerHTML = ''; 
    movies.forEach(movie => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}" loading="lazy">
            <div class="card-content">
                <h2>${movie.Title}</h2>
                <p>Year: ${movie.Year}</p>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}
