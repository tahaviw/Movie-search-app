import {getMovies} from './api.js';
import { renderCards } from './ui.js';

export async function test() {
    const result = await getMovies("batman");//input
    const movies = result.Search;
    return renderCards(movies);
}

test()