const apiKey = import.meta.env.VITE_OMDB_API_KEY;

async function getMovies(title) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
        if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`)
        }
        const data = await response.json()
        return data
    }catch (error) {
        console.error(`Network Error: ${error}`)
    }
}

export { getMovies }