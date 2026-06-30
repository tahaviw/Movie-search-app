export function renderCards (movies) {
    const cardsContainer = document.querySelector('#results');
    movies.forEach(movie => {
        let card = document.createElement('div');
        // add a class to the card for styling CSS
        card.classList.add('card');
        card.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p>Year: ${movie.Year}</p>
        `;
        // this is where we insert the card into the container (results div)
        cardsContainer.appendChild(card);
    })
}