import React from 'react';
import MovieTile from 'components/MovieTile';
import './MovieList.css';

const MovieList = ({
  data,
}) => (
  <div className="movies">
    {data ?
      Object.values(data).map(item => (
        <div
          className="tile"
          key={encodeURIComponent(item.id)}
        >
          <MovieTile
            title={item.title}
            date={item.release_date}
            overview={item.overview}
          />
        </div>
      )) : null
    }
  </div>
);
export default MovieList;
