import React from "react";
import { withRouter } from "react-router";
import VideoPlayPage from "../../pages/VideosPlayPage/VideoPlayPage.component";

import "./moviesCardInnerSection.css";

const MoviesCardInnerSection = ({ poster_path, title, vote_average, overview, history, match }) => {
  const handlerFuntion = (e) => {
    e.preventDefault();
    const trimTitle = title.replaceAll(" ", "");
    history.push(`${match.url}${trimTitle}`);
  };

  return (
    <div className="hoveEffectDiv" onClick={handlerFuntion}>
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
