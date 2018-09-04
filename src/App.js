import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Home from './containers/Home';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
