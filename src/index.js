import React from "react";
import { render } from "react-dom";

class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "Nakayama"};
  }

  render() {
    return (
    <h2 onClick={this.onButtonClick}>Hi {this.state.name} {this.props.age}</h2>
    );
    }
  
    onButtonClick= () => {
      this.setState({name :"Aihara"});
    }
}

render(<Human age="30"/>, document.getElementById("root"));