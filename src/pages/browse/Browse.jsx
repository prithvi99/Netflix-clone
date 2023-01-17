import "./browse.css";
import Navbar from "../../components/navbar/Navbar";
import BgImage from "./../../components/bgImage/BgImage";
import Content from "./../../components/content/Content";
import requests from "../../Requests";

const Browse = () => {
  return (
    <div className="browse">
      {/* <div className="browseContainer"> */}
      <Navbar />
      <BgImage />
      <Content
        rowTitle="Trending"
        fetchUrl={requests.fetchTrending}
        isVertical
      />
      <Content
        rowTitle="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Content rowTitle="Action" fetchUrl={requests.fetchActionMovies} />
      <Content rowTitle="Adventure" fetchUrl={requests.fetchAdventureMovies} />
      <Content rowTitle="Animation" fetchUrl={requests.fetchAnimationMovies} />
      <Content rowTitle="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Content rowTitle="Fantasy" fetchUrl={requests.fetchFantasyMovies} />

      {/* </div> */}
    </div>
  );
};

export default Browse;
