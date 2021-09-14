import React from "react";
import HomePageComponent from "../../Pages/HomePage/HomePage";
import MoviesPlayPage from "../../Pages/MoviesPage/MoviesPlayPage.component";
import { Route, Link, Switch } from "react-router-dom";

const AllPages = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/play" component={MoviesPlayPage} />
      </Switch>
    </>
  );
};

export default AllPages;
