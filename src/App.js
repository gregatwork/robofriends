import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';

const App = () => {
  return(
    <div className='tc'>
      <h1 className='tc'>RoboFriends</h1>
      <SearchBox />
      <CardList robots={ robots } />
    </div>
  );
}

export default App;
