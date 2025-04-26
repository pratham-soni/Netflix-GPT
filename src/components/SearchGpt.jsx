import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BackgroundIMG } from "../utils/constants";

const SearchGpt = () => {
  return (
    <div>
      {/* GPT Search Bar
    GPT Movie Suggessions */}
      <div className="absolute -z-10">
        <img className="" src={BackgroundIMG} alt="bg-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default SearchGpt;
