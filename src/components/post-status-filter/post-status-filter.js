import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class PostStatusFilter extends Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{ name: 'all', label: 'Все' },
			{ name: 'like', label: 'Понравилось' },
		];
	}

	render() {
		const buttons = this.buttons.map(({ name, label }) => {
			const activeBtn = this.props.filter === name;
			const clazz = activeBtn ? 'btn-info' : 'btn-outline-secondary';
			return (
				<button key={name} type='button' className={`btn ${clazz}`} onClick={() => this.props.onFilterSelect(name)}>
					{label}
				</button>
			);
		});
		return <ButtonGroup>{buttons}</ButtonGroup>;
	}
}
