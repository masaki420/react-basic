import React from "react";

export class AddTodo extends React.Component {
	constructor(props){
		super(props);
		this.state = { title: "test" };
	}


	render() {
		return (<>
		<h2>AddTodo</h2>
		<form onSubmit={this.handleSubmit}>
			<input value={this.state.title} onChange={this.handleChange}/>
			<input type="submit" value="Add todo to List" />
		</form>
		</>);
	}

	handleChange = event => {
		const title = event.target.value;
		this.setState({ title: title});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		alert(this.state.title);
		this.setState({ title: "" });
	};
}