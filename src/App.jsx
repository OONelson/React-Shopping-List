/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './Header';
import Input from './Input';
import List from './List';
import Footer from './Footer';
const App = () => {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems(items => [...items, item]);
	}
	function handleDeleteItem(id) {
		setItems(items => items.filter(item => item.id !== id));
	}
	function handleToggle(id) {
		setItems(items =>
			items.map(item =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	function handleClearList() {
		setItems([]);
	}
	return (
		<div className='app'>
			<Header />
			<Input onAddItems={handleAddItems} />
			<List
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggle}
				onClearList={handleClearList}
			/>
			<Footer items={items} />
		</div>
	);
};

export default App;
