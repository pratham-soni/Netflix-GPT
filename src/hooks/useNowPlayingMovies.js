import { API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        // "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        "https://api.themoviedb.org/3/movie/now_playing?api_key=" + { API_KEY },

        API_OPTIONS
      );

      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {}
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
