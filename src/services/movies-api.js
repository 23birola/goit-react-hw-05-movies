import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '110a8a7647f7de9c0b3bf03e930472b8';

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    );
    return response.data.results;
  } catch {
    toast.error('Something went wrong');
  }
}

export async function fetchMovieInfo(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    return response.data;
  } catch {
    toast.error('Something went wrong');
  }
}

export async function fetchMovieCast(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    );
    return response.data.cast;
  } catch {
    toast.error('Something went wrong');
  }
}

export async function fetchMovieReviews(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
    return response.data.results;
  } catch {
    toast.error('Something went wrong');
  }
}

export async function fetchMovies(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
    );
    return response.data.results;
  } catch {
    toast.error('Something went wrong');
  }
}
