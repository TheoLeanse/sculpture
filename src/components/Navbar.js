import React, { useState } from 'react';
import { Link } from 'gatsby';

export default () => {
	const [isActive, setActive] = useState(false);
	return (
		<nav className={isActive ? 'open' : 'closed'}>
			<div className="bar">
				<Link to="/" className="" title="">
					Kira Freije
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
				<li>
					<Link to="/info">Info</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/printed">Printed</Link>
				</li>
			</ul>
		</nav>
	);
};
