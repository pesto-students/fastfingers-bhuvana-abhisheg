import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Route from './components/Route';
import GameScreen from './components/gameScreen/GameScreen';

function App() {
  return (
    <div className="container">
      <Route path="/">
        <Login />
      </Route>
      <Route path="/game-screen">
        <GameScreen />
      </Route>
    </div>
  );
}

export default App;
