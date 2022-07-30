import React from 'react';

const AppHeader = ({ liked, allPosts }) => {
	return (
		<div className='app-header d-flex'>
			<h1>Artur Nasibullin Bad Twitter</h1>
			<h2>
				{allPosts} записей, из них понравилось {liked}
			</h2>
		</div>
	);
};
export default AppHeader;
