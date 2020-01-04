import Layout from '../components/Layout';
import React from 'react';
import { PageTemplate as NewPageTemplate } from '../components/Items';

// configured in CMS and represented in markdown
const pageModel = {
	title: 'Home',
	layout: 'flexible',
	heading: null,
	items: [
		{
			type: 'image',
			link: '/project',
			grid: {
				full: false,
				columnStart: 5,
				columnEnd: 9
				// or: `span: 4`
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		},
		{
			type: 'image',
			link: '/project',
			grid: {
				full: false,
				columnStart: 3,
				columnEnd: 6
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		},
		{
			type: 'image',
			link: '/project',
			grid: {
				full: false,
				columnStart: 7,
				columnEnd: 10
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		},
		{
			type: 'image',
			link: '/project',
			grid: {
				full: true
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		},
		{
			type: 'image',
			link: '/project',
			grid: {
				full: false,
				columnStart: 2,
				columnEnd: 9
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		}
	]
};

export default ({ data, location }) => {
	return (
		<Layout pathname={location.pathname}>
			<NewPageTemplate {...pageModel} />
		</Layout>
	);
};
