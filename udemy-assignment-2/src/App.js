import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  // sets the inital input to an empty string (which is attached to input tag below)
  state = {
    userInput: ''
  }

  // when this method called, input will change to the value the user inputs 
  changeListenerHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    // to delete the char we want we pass index
    text.splice(index, 1);
    // remember since we split the string up we need to put it back together
    const updatedText = text.join(''); 
    // finally we update our state
    this.setState({userInput: updatedText});
  }
  
  render() {
    const charList = this.state.userInput.split('').map((chr, index) => {
      return <Char 
        character={chr} 
        key={index} 
        clicked={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div>
        <input type='text' onChange={this.changeListenerHandler} value={this.state.userInput}/>
        {/* displays whatever the input the user has submitted */}
        <p>{this.state.userInput}</p>
        {/* In order to use components from other files, just tack em on here and give them properties they can then access in other files. */}
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;

// <div className="App">
//   <ol>
//     <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
//     <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
//     <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
//     <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
//     <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
//     <li>When you click a CharComponent, it should be removed from the entered text.</li>
//   </ol>
//   <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
// </div>