import {getMovies} from './api.js';
import { renderCards } from './ui.js';

const searchBtn = document.querySelector("#searchBtn")
const searchInput = document.querySelector("#searchInput")

export async function searchHandler() {
    const result = await getMovies(searchInput.value);//input
    const movies = result.Search;
    return renderCards(movies);
}

searchBtn.addEventListener("click", searchHandler)