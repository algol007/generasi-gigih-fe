import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Fragment>
      <h1>404</h1>
      <div>Page Not Found</div>
      <Link to='/home'>
        <button>Back to Homepage</button>
      </Link>
    </Fragment>
  );
}

export default NotFound;
