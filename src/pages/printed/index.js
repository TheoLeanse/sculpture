import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

const printedItems = [
	{
		id: 'printed-item',
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation',
		description: 'This is a descrition'
	},
	{
		id: 'printed-item',
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation',
		description: 'This is a descrition'
	}
];

const PrintedItem = ({ id, src, alt, description }) => {
	return (
		<div>
			<Link to={`/printed/${id}`}>
				<img src={src} alt={alt} />
			</Link>
			<p>{description}</p>
		</div>
	);
};
const InfoPage = () => (
	<Layout>
		{printedItems.map(props => (
			<PrintedItem {...props} />
		))}
	</Layout>
);

export default InfoPage;
