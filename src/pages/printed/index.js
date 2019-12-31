import React from 'react';
import Layout from '../../components/Layout';
import { PageTemplate } from '../../components/Items';

const pageModel = {
	title: 'Home',
	layout: 'flexible',
	heading: null,
	items: [
		{
			type: 'image-text-right',
			link: '/printed/printed-item',
			text: 'text',
			grid: {
				full: false,
				columnStart: 3,
				columnEnd: 6
				// or: `span: 4`
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		},
		{
			type: 'image-text-right',
			link: '/printed/printed-item',
			text: 'text',
			grid: {
				full: false,
				columnStart: 7,
				columnEnd: 10
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		}
	]
};

export default () => (
	<Layout>
		<PageTemplate {...pageModel} />
	</Layout>
);
