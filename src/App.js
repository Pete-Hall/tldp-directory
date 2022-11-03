import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Routes,
  Switch,
} from  'react-router-dom';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch> */}
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path = "/details/:name" element={<Results />} />
        </Routes>
        {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
