import React, { Component } from 'react';
import './App.css';

export default class NameForm extends Component {

  constructor(){
    super()
    this.state ={
       fields: {
         name:'',
         result:'',
       },
       errors: {},
    }
    this.handleValidation = this.handleValidation.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleValidation(){
       let fields = this.state.fields;
       let errors = {};
       let formIsValid = true;

       if(!fields["name"]){
          formIsValid = false;
          errors["name"] = "* Please provide a name";
       }

       if(typeof fields["name"] !== "undefined" && !fields["name"] === false){
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
             formIsValid = false;
             errors["name"] = "* Letters only!";
          }
       }

      this.setState({errors: errors});
      return formIsValid;
  }

  handleChange(field, e){
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({fields});
  }

  handleSubmit(e){
      e.preventDefault();
      if(this.handleValidation()){
        this.setState({result:this.state.fields["name"]})
        }else{
          console.log('validation failed')
        }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} method="POST">
              <label htmlFor="name">Name:</label>
                <br /><br />
              <input className="typeBox" type="text" refs="name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                <br />
              <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                <br />
              <button className="submit" type="submit">Submit</button>
        </form>
        <Greeting name={this.state.result} />
      </div>
    )
  }
}

function Greeting(props) {
  return (
    <section>
      <div>
        <p>Hello,</p>
        <h2>{props.name}</h2>
      </div>
    </section>
  );
}
