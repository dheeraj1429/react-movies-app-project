import React from "react";
import { withRouter } from "react-router";
import "./moviesCardInnerSection.css";

const MoviesCardInnerSection = ({ poster_path, title, vote_average, overview, history, match }) => {
  return (
    <div className="hoveEffectDiv" onClick={() => history.push(`${match.url}${title}`)}>
      <div
        className="moviesCardInnerSection"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${poster_path})`,
        }}
      >
        <p>{title}</p>
        <p>{vote_average}</p>
      </div>
    </div>
  );
};

export default withRouter(MoviesCardInnerSection);
