import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // always call super() with constructor

    this.state = { // state is initially an JSON object
      name: "Tran", // give variables to state
    };

  }
  render() { // what we want React to render. whatever in {} within the return() is calling JavaScript code
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi {this.state.name} </p> 
          <button onClick={() => {
            // this.state.name = "Bi" <- doesnt create a new object, old object is not changed
            this.setState({name: "Bi"}); // if new object has same key as constructor, the key will get updated. setState for shallow merging
          }}>Change Name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
