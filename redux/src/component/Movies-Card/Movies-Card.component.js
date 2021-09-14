import React from "react";
import MoviesCardInnerSection from "./moviesCardInnerSection/moviesCardInnerSection";
import SideBarComponent from "../sideBarComponent/SideBar.component";

import "./Movies-Card.style.css";

class MoviesCardComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      moviesCollection: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ moviesCollection: data.results });
        console.log(data.results);
      });
  }

  searchEvent = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { moviesCollection, search } = this.state;
    const filterItems = moviesCollection.filter((movies) => movies.title.toLowerCase().includes(search.toLowerCase()));

    return (
      <>
        {/* <input type="search" onChange={this.searchEvent} /> */}
        <SideBarComponent />
        <div className="MainDiv">
          <div className="moviBlock">
            {filterItems.map(({ id, ...otherProps }) => (
              <MoviesCardInnerSection key={id} {...otherProps} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default MoviesCardComponent;
