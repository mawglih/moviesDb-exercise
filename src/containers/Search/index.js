import React, { Component } from 'react';
import  { connect } from 'react-redux';
import {
  searchMoviesStart,
} from 'actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchMoviesStart(this.state.term);
    this.setState({
      term: '',
    });
  }
  render() {
    // const {
    //   term,
    // } = this.state;
    // console.log('term is: ', term);
    return (
      <form
        onSubmit={this.onFormSubmit}
      >
        <input
          placeholder="Type the movie name"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}
export default connect(null, { searchMoviesStart })(Search);