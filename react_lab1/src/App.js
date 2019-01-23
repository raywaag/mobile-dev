import React, { Component } from 'react';
import './App.css';
import NameForm from './NameForm';

class App extends Component {

  render() {
    return (
      <div className="padded">
        <NameForm />
      </div>
    );
  }
}

export default App;
