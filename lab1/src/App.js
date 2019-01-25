import React, { Component } from 'react';
import './App.css';
import NameForm from './NameForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isValid:false};
    this.setValid = this.setValid.bind(this);
  }
  setValid(validity) {
    console.log(validity);
    this.setState({isValid:validity});
  }
  render() {
    let errors = {
      name:"* Please provide a name",
    letters:"* Letters Only"};
    return (
      <div className="padded">
        <NameForm setValid={this.setValid} errors={errors}/>
      </div>
    );
  }
}

export default App;
