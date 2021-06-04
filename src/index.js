import React from "react";
import { render } from "react-dom";
import "./index.css";

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
    const {temp} = this.state;

    return (
      <div className={this.H2OState(temp)}>
      <h2>phase: {this.H2OState(temp)}, {temp}</h2>

      <button onClick={this.onPlusClick}>+</button>
      <button onClick={this.onPlus10Click}>+10</button>
      <button onClick={this.onMinusClick}>-</button>
      <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }

  onPlusClick=()=>{
    const {temp} = this.state;
    this.setState({ temp : temp +1 });
  };
  onPlus10Click=()=>{
    const {temp} = this.state;
    this.setState({ temp: temp + 10});
  };
  onMinusClick=()=>{
    const {temp} = this.state;
    this.setState({ temp: temp -1 });
  };
  onMinus10Click=()=>{
    const {temp} = this.state;
    this.setState({ temp: temp - 10});
  };
}

render(<Human />, document.getElementById("root"));