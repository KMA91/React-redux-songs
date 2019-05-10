import React from 'react';
import SongList from './SongList';
import './App.css';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  )
}

export default App;