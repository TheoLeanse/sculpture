import { Link } from 'gatsby';
import React from 'react';

const getStyle = ({ full, columnStart, columnEnd }) => {
	return full
		? {}
		: {
				gridColumn: `${columnStart} / ${columnEnd}`
		  };
};

const Image = ({ src, alt, link, grid, text }) => {
	return link ? (
		<Link
			to={link}
			className={`image ${grid.full ? 'full-width' : 'variable-width'}`}
			title=""
			style={getStyle(grid)}
		>
			{src ? <img src={src} alt={alt} /> : null}
			{text ? <p>{text}</p> : null}
		</Link>
	) : (
		<div
			className={`image ${grid.full ? 'full-width' : 'variable-width'}`}
			style={getStyle(grid)}
		>
			{src ? <img src={src} alt={alt} /> : null}
			{text ? <p>{text}</p> : null}
		</div>
	);
};

export const PageTemplate = ({ items }) => (
	<div className="page">
		{items.map(props => {
			switch (props.type) {
				case 'image':
				case 'image-text-below':
				case 'image-text-right':
				case 'text':
					return <Image {...props} />;
				default:
					break;
			}
		})}
	</div>
);
