import React from 'react';

export default class Form extends React.Component {
  state = {
    firstName: '',
  }

onSubmit = e => {
  e.preventDefault();
  this.props.onSubmit(this.state);
  console.log(this.state);
}

  render() {
    return (
      <form>
        <input
        placeholder='First Name'
        value={this.state.firstName}
        onChange={e => this.setState({ firstName: e.target.value})}
         />
         <button onClick={e => this.onSubmit(e)}>
         Submit
         </button>

      </form>
    );
  }
}
