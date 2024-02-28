/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = ({ items }) => {
	if (!items.length)
		return <p className='footer'>Start making your shopping list</p>;
	const numItems = items.length;
	const numTicked = items.filter(item => item.packed).length;

	const percentage = Math.round((numTicked / numItems) * 100);

	return (
		<footer className='footer'>
			<p>
				{percentage === 100
					? 'You got everything on the list'
					: `you have ${numItems} items on your list, and you've bought ${numTicked} (${percentage}%)`}
			</p>
		</footer>
	);
};
export default Footer;
