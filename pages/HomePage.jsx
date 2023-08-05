import React, { useEffect } from 'react';
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { DefaultLayout } from '../layouts';

function HomePage() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log(history);
    console.log(location);
  }, []);

  return (
    <DefaultLayout>
      <div>HomePage</div>
      <NavLink to='/about'>
        <button onClick={() => console.log('go to about')}>About</button>
      </NavLink>
    </DefaultLayout>
  );
}

export default HomePage;
