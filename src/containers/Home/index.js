import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchMoviesStart,
  // searchMoviesStart,
} from 'actions';
import Search from 'containers/Search';

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
      <div>
        <Search />
      </div>
    );
  }
}

const mapStateToProps = state => (
 {
    movies: state.movies,
  }
);

export default connect(mapStateToProps, { fetchMoviesStart })(Home);
