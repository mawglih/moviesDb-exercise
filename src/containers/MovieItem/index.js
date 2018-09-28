import React, { Component } from 'react';
import {
  getMovieInfo,
  IMAGE_URL,
} from 'api'; 
import { Link } from 'react-router-dom';
import './MovieItem.css';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    getMovieInfo(this.props.match.params.id)
    .then(response => {
      this.setState({
        data: response.data,
      });
    })
    
  }
  render() {
    console.log('movie info: ', this.state.data);
    const {
      original_title,
      poster_path,
      overview,
      tagline,
      release_date,
    } = this.state.data;
    return (
      <div className="movieSingle">
        <h2>
          <span>
            {original_title}
          </span>
        </h2>
        <h3>
          {release_date ? 
            (<span>
            ({release_date.split('-')[0]})
          </span>) : null
          }
        </h3>
        <h4>{tagline}</h4>
        {poster_path ? 
          (<div>
            <img src={`${IMAGE_URL}${poster_path}`} alt={original_title}/>
          </div>) : null
        }
        <div className="overview">
          <p>{overview}</p>
        </div>
        <div>
          <Link to='/'>
            {'Go back'}
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieItem;
