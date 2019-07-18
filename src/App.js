import React from 'react';
import logo from './logo.svg';
import './App.css';

import Createable from 'react-select/createable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', output: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    this.setState({output: this.state.value});
    event.preventDefault(); //prevents refresh after submit button
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        < label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.output}</h1>
      </div>
      
    );
  }
}

export default App;
