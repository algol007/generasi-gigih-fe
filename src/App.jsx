import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProfilePage, HomePage, AboutPage, NotFound } from '../pages';
// import './App.css';
// import ProfilePage from '../pages/ProfilePage';
// import HomePage from '../pages/HomePage';
// import AboutPage from '../pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/profile/:id' render={() => <ProfilePage />} />
        <Route path='/about' render={() => <AboutPage />} />
        <Route path='/home' render={() => <HomePage />} />
        {/* <Route path='*' render={() => <NotFound />} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
