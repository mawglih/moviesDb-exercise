import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchMoviesStart,
} from 'actions';
import Search from 'containers/Search';
import MovieList from 'components/MovieList';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 6,
    };
  }
  handleClick(number) {
    console.log('page value: ', number);
    this.setState({
      currentPage: Number(number)
    });
  }
  componentDidMount() {
    fetchMoviesStart()
  }

  render() {
    const {
      movies,
    } = this.props;
    const {
      currentPage,
      itemsPerPage,
    } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Object.values(movies).slice(indexOfFirstItem, indexOfLastItem);
    //
    const pageNumbers = Array.from(new Array(4),(val,index)=>index+1);
    console.log("Total page Numbers: ", pageNumbers.length);
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div
          key={number}
          id={number}
          onClick={this.handleClick.bind(this, number)}
          className="paginationItem"
        >
          {number}
        </div>
      );
    });
    console.log('Home movies: ', movies);
    console.log('Current page: ', currentPage);
    return(
      <div className="main">
        <div className="search">
          <Search />
        </div>
        <div className="movieList">
          <MovieList
            data={currentItems}
          />
        </div>
        <div className="pagination">
          {renderPageNumbers}
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

export default connect(mapStateToProps, { fetchMoviesStart })(Home);
