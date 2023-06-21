import logo from './logo.svg';
import './App.css';
import React from 'react'
import Title from './components/Title/Title';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

  render() {
    console.log("rendering");
    return (
      <Router>
        <div className="App">
          <Title></Title>
        </div>
      </Router>
    );
  }

}

export default App;
