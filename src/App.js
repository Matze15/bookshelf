import logo from './logo.svg';
import './App.css';
import React from 'react';
import { NavBar } from './NavBar';

class App extends React.Component {
  render(){
    return(
      <div>
        <NavBar searchTerm={null} />
      </div>
    )
  }
}

export default App;
