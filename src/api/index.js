const API_MOVIE = 'api_key=5bb7a72a3185435136178e1839494fa4';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&';
export const URL = `${BASE_URL}${API_MOVIE}`;
export const SEARCH_MOVIE_URL = `${SEARCH_URL}${API_MOVIE}`;
export default {};
