import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ label: 'Учу Реакт', important: true, like: true, id: 1 },
				{ label: 'Вроде получается', important: false, like: false, id: 2 },
				{ label: 'Блин, нужен перерыв', important: false, like: false, id: 3 },
			],
			term: '',
			filter: 'all',
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLike = this.onToggleLike.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);
		this.maxId = 4;
	}

	deleteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id === id);
			const newData = [...data.slice(0, index), ...data.slice(index + 1)];
			return {
				data: newData,
			};
		});
	}

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newData = [...data, newItem];
			return {
				data: newData,
			};
		});
	}
	onToggleImportant(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id === id);
			const old = data[index];
			const newItem = { ...old, important: !old.important };
			const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newData,
			};
		});
	}
	onToggleLike(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id === id);
			const old = data[index];
			const newItem = { ...old, like: !old.like };
			const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newData,
			};
		});
	}

	searchPost(items, term) {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.label.indexOf(term) > -1;
		});
	}
	onUpdateSearch(term) {
		this.setState({ term });
	}

	onFilterSelect(filter) {
		this.setState({ filter });
	}

	filterPost(items, filter) {
		if (filter === 'like') {
			return items.filter((item) => item.like);
		} else {
			return items;
		}
	}

	render() {
		const { data, term, filter } = this.state;
		const allPosts = data.length;
		const liked = data.filter((item) => item.like).length;
		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
		return (
			<div className='app'>
				<AppHeader allPosts={allPosts} liked={liked} />
				<div className='search-panel d-flex'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>
				<PostList posts={visiblePosts} onDelete={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleLike={this.onToggleLike} />
				<PostAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
