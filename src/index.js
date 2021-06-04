import React from "react";
import { render } from "react-dom";

class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temp: 15};
  }

  H2OState(temp){
    if(temp <= 0){
      return "ice";
    }
    if(temp <= 100){
      return "water";
    }
    if(temp => 100){
      return "steam";
    }
  }

  render() {
    return (
      <>
      <h2>phase: {this.H2OState(this.state.temp)}, {this.state.temp}</h2>

      <button onClick={this.onPlusClick}>+</button>
      <button onClick={this.onPlus10Click}>+10</button>
      <button onClick={this.onMinusClick}>-</button>
      <button onClick={this.onMinus10Click}>-10</button>
      </>
    );
  }

  onPlusClick=()=>{
    this.setState({ temp : this.state.temp +1 });
  };
  onPlus10Click=()=>{
    this.setState({ temp: this.state.temp + 10});
  };
  onMinusClick=()=>{
    this.setState({ temp: this.state.temp -1 });
  };
  onMinus10Click=()=>{
    this.setState({ temp: this.state.temp - 10});
  };
}

render(<Human />, document.getElementById("root"));