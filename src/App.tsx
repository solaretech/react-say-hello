import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render (){
    const logoAttrs = {
      alt: "logo",
      className: "App-logo",
      src: logo
    };
    const title = "こんにちは";
    const targets = ["World", "Kanae", "Yukina"];

    return(
      <div className="App">
        <header className="App-header">
          {
          // コ メ ン ト は こ う 書 く
          }
          <img {...logoAttrs} />
          {title && <p>{title}</p>}
          {targets.map(target => (
            <p>Hello, {target}!</p>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
