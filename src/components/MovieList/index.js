import React from 'react';
import MovieTile from 'containers/MovieTile';
import './MovieList.css';

const MovieList = ({
  data,
}) => (
  <div className="movies">
    {data ?
      data.map(item => (
        <div
          className="tile"
          key={encodeURIComponent(item.id)}
        >
          <MovieTile
            title={item.title}
            date={item.release_date}
            overview={item.overview}
            id={item.id}
          />
        </div>
      )) : null
    }
  </div>
);
export default MovieList;
