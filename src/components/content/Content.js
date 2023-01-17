import "./content.css";
import axios from "../../axios";
import requests from "../../Requests";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/Modal";

const Content = ({ rowTitle, fetchUrl, isVertical = false }) => {
  const [openModal, setOpenModal] = useState(false);

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function showData() {
      const request = axios
        .get(fetchUrl)
        .then((req) => {
          // console.log(req.data.results[0]);
          setMovies(req.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    showData();
  }, [fetchUrl]);

  // console.log(movies);
  return (
    <div className="content">
      <h2>{rowTitle}</h2>
      <div className="rowPosters">
        {movies?.map((movie) => {
          return (
            <div
              // onClick={setOpenModal(!openModal)}
              className="movieSlide"
              key={movie.id}
            >
              <img
                // className={`moviePoster ${isVertical && "largeMoviePoster"}`}
                className={`${isVertical ? "largeMoviePoster" : "moviePoster"}`}
                src={`http://image.tmdb.org/t/p/original${
                  isVertical ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />

              <h3 className="movieTitle">
                {" "}
                {movie.title || movie.original_name}{" "}
              </h3>

              {/* <Modal
                open={openModal}
                movieName={movie.title || movie.original_name}
                moviePoster={movie.backdrop_path}
                movieDesc={movie.overview}
              /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
