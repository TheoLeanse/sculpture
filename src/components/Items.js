import { Link } from 'gatsby';
import React from 'react';

const fullWidthStyle = {
	gridColumn: '1 / 11',
	marginBottom: '50px',
	width: '100vw',
	position: 'relative',
	left: '50%',
	right: '50%',
	marginLeft: '-50vw',
	marginRight: '-50vw'
};

const Image = ({ src, alt, link, grid, text }) => {
	return link ? (
		<Link
			to={link}
			className=""
			title=""
			style={
				grid.full
					? fullWidthStyle
					: {
							gridColumn: `${grid.columnStart} / ${grid.columnEnd}`, // or gridColumn: `${grid.columnStart} / span ${grid.span}`
							marginBottom: '50px'
					  }
			}
		>
			<img src={src} alt={alt} />
			{text ? <p>{text}</p> : null}
		</Link>
	) : (
		<div
			style={
				grid.full
					? fullWidthStyle
					: {
							gridColumn: `${grid.columnStart} / ${grid.columnEnd}`,
							marginBottom: '50px'
					  }
			}
		>
			<img src={src} alt={alt} />
			{text ? <p>{text}</p> : null}
		</div>
	);
};

const Text = ({ text, grid }) => {
	return (
		<div
			style={
				grid.full
					? fullWidthStyle
					: {
							gridColumn: `${grid.columnStart} / ${grid.columnEnd}`,
							marginBottom: '50px'
					  }
			}
		>
			<p>{text}</p>
		</div>
	);
};

export const PageTemplate = ({ items }) => (
	<div
		style={{
			display: 'grid',
			gridTemplateColumns: 'repeat(10, 10%)',
			width: '95%',
			margin: '0 auto'
		}}
	>
		{items.map(props => {
			switch (props.type) {
				case 'image':
				case 'image-text-below':
				case 'image-text-right':
					return <Image {...props} />;
				case 'text':
					return <Text {...props} />;
				default:
					break;
			}
		})}
	</div>
);
