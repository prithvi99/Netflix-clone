const API_KEY = "f2f224f23e9fd2d0d6795cd4cea30dc6";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
};

export default requests;
