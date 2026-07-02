import {getMovies} from './api.js';
import { renderCards } from './ui.js';

const searchBtn = document.querySelector("#searchBtn")
const searchInput = document.querySelector("#searchInput")

export async function searchHandler() {
    const cardsContainer = document.querySelector("#results")
    cardsContainer.innerHTML = '<p class="status-msg">Loading...</p>'
    try {
        const result = await getMovies(searchInput.value);//input
        if (result.Response === "False") {
            cardsContainer.innerHTML = '<p class="status-msg">No movies found !!</p>'
            return
        }
        const movies = result.Search;
        
        return renderCards(movies);
    } catch (error) {
        cardsContainer.innerHTML = '<p class="status-msg">Something went wrong. Please try again.</p>'
    }
}
searchBtn.addEventListener("click", searchHandler)