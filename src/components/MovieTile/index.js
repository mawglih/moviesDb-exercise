import React from 'react';
import './MovieTile.css';

const MovieTile = ({
  title,
  date,
  overview,
}) => (
  <div className="movieItem">
    <div>
      <h2>
        {title} ({date? date.split('-')[0] : null})
      </h2>
    </div>
    <div>
      <p>
        {overview}
      </p>
    </div>
    <div>
      <button>
        {'Show more'}
      </button>
    </div>
  </div>
)
export default MovieTile;
