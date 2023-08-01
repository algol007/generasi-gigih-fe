import { Fragment } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import { profiles } from './dummy';

function App() {
  const handleAvatarClick = (name) => {
    alert(name);
  };

  return (
    <Fragment>
      {profiles.map((profile) => {
        return (
          <div key={profile.id}>
            <Avatar data={profile} onClickName={handleAvatarClick} />
          </div>
        );
      })}
      <button>Male</button>
      <button>Female</button>
    </Fragment>
  );
}

export default App;
