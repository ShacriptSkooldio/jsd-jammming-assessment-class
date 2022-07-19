import React, { Component } from "react";

//import App.css
import "./App.css";

//import 3 components

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <SearchBar /> */}
          <div className="App-playlist">
            {/* <SearchResults /> */}
            {/* <SearchPlaylist /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
