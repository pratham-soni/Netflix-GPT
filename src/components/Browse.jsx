import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // fetch data from TMDB api and update store
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* *******Planning*******
        MainContainer
         - VideoBackground
         - VideoTitle
          SecondryContainer
          - Movies list * n
            - movie cards * n
      */}
    </div>
  );
};

export default Browse;
