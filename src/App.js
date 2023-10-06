import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
  const isAutenticated = useSelector(state => state.auth.isAutenticated);

  return (
    <React.Fragment>
      <Header />
      <Auth />
      {
        isAutenticated
        &&
        <UserProfile />
      }
      <Counter />
    </React.Fragment>
  );
}

export default App;
