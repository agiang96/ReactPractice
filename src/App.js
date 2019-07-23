import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Createable from 'react-select/createable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      output: '',
      exerciseList: [
        "push ups",
        "sit ups",
        "bench press"
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  
  // if exercise isn't in the list, then add it to the list 
  // otherwise, output the chosen exercise
  handleSubmit(event) {
    let currentValue = this.state.value;
    if(currentValue in this.state.exerciseList){
      this.setState({
        output: this.state.value,
        exerciseList: this.state.exerciseList.concat(this.state.value)
      });
    }
    else{
      this.setState({
        output: this.state.value,
      });
    }
      
    event.preventDefault(); //prevents refresh after submit button
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        {/* <form> */}
          <label>
            Exercises: 
            <input type="text" value={this.state.value} list="exerciseList" onChange={this.handleChange} />
            <datalist id="exerciseList">
              {this.state.exerciseList.map((ex,key) =>
                <option key={key} value={ex}/>
                )}
            </datalist>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>Chosen Exercise: {this.state.output}</p>
      </div>
      
    );
  }
}

export default App;
