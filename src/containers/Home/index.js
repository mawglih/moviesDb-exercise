import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchMoviesStart,
} from 'actions';
import Search from 'containers/Search';
import MovieList from 'components/MovieList';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    fetchMoviesStart()
  }

  render() {
    const {
      movies,
    } = this.props;
    console.log('Home movies: ', movies);
    return(
      <div className="main">
        <div className="search">
          <Search />
        </div>
        <div className="movieList">
          <MovieList
            data={movies}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
 {
    movies: state.movies,
  }
);

export default connect(mapStateToProps, { fetchMoviesStart, })(Home);
