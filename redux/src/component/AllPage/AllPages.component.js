import React from "react";
import HomePageComponent from "../../Pages/HomePage/HomePage";
import MoviesPlayPage from "../../Pages/MoviesPage/MoviesPlayPage.component";
import VideoPlayPage from "../pages/VideosPlayPage/VideoPlayPage.component";

import { Route, Link, Switch } from "react-router-dom";

const AllPages = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/play" component={MoviesPlayPage} />
        <Route exact path="/playSection" component={VideoPlayPage} />
      </Switch>
    </>
  );
};

export default AllPages;
