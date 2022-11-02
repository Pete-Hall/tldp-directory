import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from  'react-router-dom';
import Search from './components/Search';


import './App.css';

// TODO: finish client side routing, importing components, etc

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
