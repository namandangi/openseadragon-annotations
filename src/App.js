import React, { Component } from 'react';
import OpenSeadragonViewer from './Components/OpenseadragonViewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OpenSeadragonViewer imageSrc={'https://api.digitalslidearchive.org/api/v1/item/5b9f02d7e62914002e94e684/tiles/dzi.dzi'}/>
      </div>
    );
  }
}

export default App;
