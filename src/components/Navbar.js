import React, { useState } from 'react';
import { Link } from 'gatsby';

export default ({ pathname = '/' }) => {
	const [isActive, setActive] = useState(false);
	return (
		<nav className={isActive ? 'open' : 'closed'}>
			<div className="bar">
				<Link to="/" className="" title="">
					KIRA FREIJE
				</Link>
				<button
					onClick={() => {
						setActive(!isActive);
					}}
					className="hamburger"
				>
					{isActive ? 'close' : 'nav'}
				</button>
			</div>
			<ul>
				<li className={`${pathname === '/info' ? 'active' : ''}`}>
					<Link to="/info">INFO</Link>
				</li>
				<li className={`${pathname === '/contact' ? 'active' : ''}`}>
					<Link to="/contact">CONTACT</Link>
				</li>
				<li
					className={`${pathname.match(/\/printed/) ? 'active' : ''}`}
				>
					<Link to="/printed">PRINTED</Link>
				</li>
			</ul>
		</nav>
	);
};
