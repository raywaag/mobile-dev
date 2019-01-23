import React, { Component } from 'react';
import './App.css';

class Validate extends React.Component {

handleUserInput (event) {
  const value = event.target.value;
  this.setState({[value]: value},
                () => { this.validateField(value, value) });
}

  render() {
    return (
      <div className="nameError">
        {Object.keys(nameError).map((fieldName, i) => {
          if(nameError[fieldName].length > 0){
            return (
              <p key={i}>{fieldName} {formErrors[fieldName]}</p>
            )
          } else {
            return '';
          }
        })}
      </div>
  }
}


export default Validate;
