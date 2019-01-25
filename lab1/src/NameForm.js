import React, { Component } from 'react';
import './App.css';

export default class NameForm extends Component {
  errorMsgs = {};
  constructor(props){
    super(props)
    this.state ={
       fields: {
         name:'',
         result:'',
       },
       errors: {},
       nameAvailable:false,
       setValid:props.setValid,
    }
    console.log(props.errors);
    this.errorMsgs = props.errors;
    this.handleValidation = this.handleValidation.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleValidation(){
       let fields = this.state.fields;
       let errors = {};
       let formIsValid = true;

       if(!fields["name"]){
          formIsValid = false;
          errors["name"] = this.errorMsgs.name;
       }

       if(typeof fields["name"] !== "undefined" && !fields["name"] === false){
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
             formIsValid = false;
             console.log(this.errorMsgs.letters);
             errors["name"] = this.errorMsgs.letters;
          }
       }
       this.state.setValid(formIsValid);
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
      console.log('submitted')
        //this.setState({result:this.state.fields["name"]})
        this.setState({nameAvailable:true})
        }else{
          console.log('validation failed')
        }
  }

  render(){
    return (
      <div>
      { (!this.state.nameAvailable) ?
        <form onSubmit={this.handleSubmit} method="POST">
              <label htmlFor="name">Name:</label>
                <br /><br />
              <input className="typeBox" type="text" refs="name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                <br />
              <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                <br />
              <button className="submit" type="submit">Submit</button>
        </form>
        :
          <div>
            Hello {this.state.fields["name"]}
          </div>
        }
        </div>
      );
  }
}
