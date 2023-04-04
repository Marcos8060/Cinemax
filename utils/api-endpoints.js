export const API_URL = {
  FETCH_TRENDING: `${process.env.NEXT_PUBLIC_BASE_URL}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  FETCH_POPULAR: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  FETCH_TOP_RATED: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  FETCH_UPCOMING: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  FETCH_NOW_PLAYING: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  FETCH_LATEST: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/latest?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
};
