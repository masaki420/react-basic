import React from "react";
import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";

export class TodoApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todos: [
				{id: 0, title: "title0"},
				{id: 1, title: "title1"},
				{id: 2, title: "title2"},
				{id: 3, title: "title3"},
				{id: 4, title: "title4"}
			],
			nextId: 0
		};
	}

	render() {
		return (<>
		<h2>TodoApp</h2>
		<AddTodo />
		<List todos={this.state.todos}/>
		</>);
	}

	// const TodoApp () {
	// 	addTodo = title => {
	
	// 	};
	
	// 	deleteTodo = id => {
	// 		todos : this.state.todos.filter()
	// 	};
	// };
}