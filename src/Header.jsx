/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	return (
		<header className='header'>
			<h1>Shopping List </h1>
			<FontAwesomeIcon
				icon={faListCheck}
				className='listIcon'
			/>
		</header>
	);
};
export default Header;
