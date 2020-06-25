
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    this.adds = this.adds.bind(this)
  }

  adds(){
    let counter = this.state.counter
    counter += 1
    this.setState({counter:counter})
  }

  render() {
    return (
      <div>
      <h1>{this.state.counter}</h1>
      <button onClick={this.adds}>counter</button>
      </div>
    )
  }
}

export default hot(App);
