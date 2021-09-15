import React from "react";
import "./PlayCustomButton.style.css";
import { withRouter } from "react-router-dom";

const PlayButtonCustom = ({ children, history, match, link }) => {
  return (
    <button type="button" className="playButton" onClick={() => history.push(`${match.url}${link}`)}>
      {children}
    </button>
  );
};

export default withRouter(PlayButtonCustom);