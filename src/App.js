import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Routes,
  Switch,
} from  'react-router-dom';
import Search from './components/Search';


import './App.css';
import Results from './components/Results';

// TODO: finish client side routing, importing components, etc

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path = "/details/:name" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
