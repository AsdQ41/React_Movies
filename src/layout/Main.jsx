import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loadung: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loadung: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ loadung: false });
      });
  }

  searchMovies = (str, type = "all") => {
    this.setState({ loadung: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loadung: false }));
  };

  render() {
    const { movies, loadung } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loadung ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
