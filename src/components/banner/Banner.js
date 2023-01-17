import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
import EmailBar from "./emailBar/EmailBar";

function Banner(props) {
  const navigate = useNavigate();
  return (
    <div className="banner">
      {/* <div className="banner__overlay" /> */}
      <div className="header">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        />

        <div>
          <button
            className="header__button"
            onClick={() => {
              navigate("/browse");
            }}
          >
            Home
          </button>
          <button className="header__button">Sign In</button>
        </div>
      </div>

      <div className="netflix__text">
        <h1>
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>

        <EmailBar />
      </div>
    </div>
  );
}

export default Banner;
