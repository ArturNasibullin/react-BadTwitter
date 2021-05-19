import React, { Component } from 'react';

export default class PostAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onValueChange(e) {
		this.setState({ text: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onAdd(this.state.text);
		this.setState({
			text: ' ',
		});
	}
	render() {
		return (
			<form className='d-flex bottom-panel' onSubmit={this.onSubmit}>
				<input type='text' className='form-control new-post-label' onChange={this.onValueChange} placeholder='О чем вы думаете сейчас?' value={this.state.text} />
				<button type='submit' className='btn btn-light btn-outline-secondary'>
					Добавить
				</button>
			</form>
		);
	}
}
