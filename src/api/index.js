const API_MOVIE = '5bb7a72a3185435136178e1839494fa4';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?';
export const URL = `${BASE_URL}api_key=${API_MOVIE}`;
export const SEARCH_MOVIE_URL = `${SEARCH_URL}api_key=${API_MOVIE}`;
export default {};
