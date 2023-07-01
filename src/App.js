import './App.css';
import React from 'react'
import Title from './components/Title/Title';
import PanelWrapper from './components/PanelWrapper/PanelWrapper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import fifaVideo from './assets/fifa_bg_vid_crop.mp4';

class App extends React.Component {

  render() {
    console.log("rendering");
    return (
      <Router>
        <div className="main">
          <video src={fifaVideo} autoPlay loop muted />
        </div>
        <div className="App">
          <Title />
          <PanelWrapper />
        </div>
      </Router>
    );
  }

}

export default App;
