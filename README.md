# Movie Search App

A lightweight, responsive movie search application that queries the OMDb API in real time and renders results through a modern glassmorphism interface. Built to demonstrate clean asynchronous JavaScript architecture, modular ES6 design, and dynamic DOM rendering without any frontend framework.

## Features

- Real-time movie search powered by the OMDb API
- Dynamic card-based rendering of search results (poster, title, year)
- Asynchronous data fetching using Fetch API and async/await
- Modular ES6 architecture separating API logic, UI rendering, and app control flow
- Graceful error and empty-state handling with user feedback messages
- Responsive grid layout with glassmorphism-styled UI components
- Environment-based API key management via Vite

## Built With

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Vite

## Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/movie-search-app.git
cd movie-search-app
npm install
```

Create a `.env` file in the project root and add your OMDb API key:

```bash
echo "VITE_OMDB_API_KEY=your_api_key_here" > .env
```

Start the local development server:

```bash
npm run dev
```

The app will be available at the local address printed in your terminal (typically `http://localhost:5173`).

## Usage

1. Type a movie title into the search input field.
2. Click the "Search" button to query the OMDb API.
3. Matching results are rendered as cards displaying the movie poster, title, and release year.
4. If no matches are found or a network error occurs, a status message is displayed in place of results.

## Game Logic

Although not a game, the core application logic follows a structured data flow:

- **Request Handling (`api.js`):** The `getMovies` function constructs a request to the OMDb API using the search term and a Vite-managed environment variable for the API key. It validates the HTTP response status and throws an error on failure, which is caught and handled upstream.
- **Application Control (`app.js`):** The `searchHandler` function orchestrates the search flow. It displays a loading state, awaits the API response, checks for a valid `Response` field, and either triggers card rendering or displays a "no results" / error message.
- **Dynamic Rendering (`ui.js`):** The `renderCards` function iterates over the returned movie array, dynamically creates DOM elements for each result, and injects poster, title, and year data into the results container. The container is cleared on each new search to prevent stale results from persisting.
- **State Feedback:** Loading, empty-result, and error states are handled through conditional DOM updates to the `#results` container, ensuring the UI always reflects the current request status.

---

Taha Belghiti — Junior Front-End Developer
Built with HTML, CSS, and JavaScript · © 2026
