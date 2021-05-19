import React, { Component } from 'react';
import '../post-list-item/post-list-item.css';

export default class PostListItem extends Component {
	render() {
		const { label, onDelete, onToggleImportant, onToggleLike, important, like } = this.props;
		let classNames = 'app-list-item d-flex justify-content-between';

		if (important) {
			classNames += ' important ';
		}

		if (like) {
			classNames += ' like ';
		}
		return (
			<div className={classNames}>
				<span className='app-list-item-label' onClick={onToggleLike}>
					{label}
				</span>
				<div className='d-flex justify-content-center align-items-center'>
					<button className='btn-star btn btn-info  btn-sm' onClick={onToggleImportant}>
						<i className='fas fa-star'></i>
					</button>
					<button className='btn-trash btn btn-info  btn-sm' onClick={onDelete}>
						<i className='fas fa-trash'></i>
					</button>
					<i className='fas fa-heart'></i>
				</div>
			</div>
		);
	}
}
