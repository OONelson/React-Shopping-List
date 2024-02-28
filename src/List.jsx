/* eslint-disable no-unused-vars */
import React from 'react';
import Item from './Item';

const List = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
	return (
		<div className='list'>
			<ul>
				{items.map(item => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
						key={item.id}
					/>
				))}
			</ul>

			<div className='group'>
				<button onClick={onClearList}>Clear List</button>
			</div>
		</div>
	);
};
export default List;
