import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // always call super() with constructor

    this.state = { // state is initially an JSON object
      name: {firstName: "Tran", lastName: "Nguyen"},
      school: "UCR",
    };

  }
  render() { // what we want React to render. whatever in {} within the return() is calling JavaScript code
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi {this.state.name.firstName} {this.state.name.lastName} </p> 
          <button onClick={
            () => {
              // this.state.name = "Bi" <- doesnt create a new object, old object is not changed
              this.setState( // pass in functions. console log is also called inside setState so we log every setState.
                // functions will run sequentially inside this call
                () => { 
                  return {
                    name: {firstName: "Bi", lastName: "Heo"},
                  };
                },
                () => {
                  console.log(this.state);
                }
              ); // update with a new object of the same format of the declared object
            }
          }>Change Name</button>
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
