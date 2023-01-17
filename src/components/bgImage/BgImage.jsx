import "./bgImage.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";
import requests from "../../Requests";

const BgImage = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = axios
        .get(requests.fetchAdventureMovies)
        .then((req) => {
          // console.log(req.data.results[0]);
          setMovie(
            req.data.results[3]
            // Math.floor(
            //   Math.random() * requests.fetchAdventureMovies.length - 1
            // )
          );
        })
        .catch((err) => {
          console.log(err);
        });

      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <>
      <div className="bgPoster">
        <div className="bgImgWrapper"></div>
        <img
          className="bgPosterImg"
          src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          // src="https://uhdwallpapers.org/uploads/converted/21/11/20/spider-man-no-way-home-1280x720_945945-mm-90.webp"
        ></img>

        <div className="movieDetails">
          <h1 className="movieName">{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="wrapperLayerDown"></div>
      </div>
    </>
  );
};

export default BgImage;
