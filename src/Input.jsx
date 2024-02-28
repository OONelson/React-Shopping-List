/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Input = ({ onAddItems }) => {
	const [quantity, setQuantity] = useState(1);
	const [description, setDescription] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if (!description) return;

		const newItem = { description, quantity, packed: false, id: Date.now() };

		onAddItems(newItem);

		setDescription('');
		setQuantity(1);
	};
	return (
		<form
			className='input'
			onSubmit={handleSubmit}
		>
			<h3>Wanna make a shopping list?</h3>
			<div>
				<select
					value={quantity}
					onChange={e => setQuantity(Number(e.target.value))}
				>
					{Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
						<option
							value={num}
							key={num}
						>
							{num}
						</option>
					))}
				</select>
				<input
					type='text'
					placeholder='add item'
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
				<button>Add</button>
			</div>
		</form>
	);
};

export default Input;
