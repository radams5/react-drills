// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       array1: []
//     }
//   }
// handleUpdater(value){
//   const listCopy = this.state.array1.slice()
//   this.setState = listCopy.push(val)
// }

//   render() {
//     const {message} = this.state
//     return (
//       <div className="App">
//         <input/>
//         <button onClick={(e) => this.handleUpdater(this.input.value)}> Add to List</button>
//         <div>{this.state}</div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      arr1: [
        'spaghetti',
        'ice cream',
        'sushi'
      ]
    ,
    userInput: ``
    }
  }

  handleInput(value) {
    this.setState({
      userInput: value
    })
  }
  
  handleFilter() {
    const arrCopy = this.state.arr1.slice()
    if(this.state.userInput !== ``){

      for (let i = 0; i < arrCopy.length; i++) {
        if (!arrCopy[i].includes(this.state.userInput)) {
          arrCopy.splice(i, 1)
          i--
          
        }
      }
    }
    let mapped = arrCopy.map(
          (e, i) => {
            return (<h2 key={i}> {e} </h2>
              )})
    return mapped
  }
// handleFilter(value){
//   this.setState({
//     userInput: value
//   })
// }


render() {
  // let foodsToDisplay = this.state.arr1.filter(
  //   (e) => e.includes(this.state.userInput)
  //   ).map(
  //     (e, i) => {
        // return (<h2 key={i}> {e} </h2>
        //   )
        // }
        // )
        return (
          <div className="App">
      <input onChange={(e) => this.handleInput(e.target.value)}></input>
      {this.handleFilter()}
    </div>
  );
}
}



export default App;

