import React from 'react';
import Layout from '../components/Layout';
import { PageTemplate } from '../components/Items';

// configured in CMS and represented in markdown
const pageModel = {
	title: 'Home',
	layout: 'flexible',
	heading: null,
	items: [
		{
			type: 'image',
			link: null,
			grid: {
				full: true
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		},
		{
			type: 'image',
			link: null,
			grid: {
				full: true
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		},
		{
			type: 'image',
			link: null,
			grid: {
				full: true
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		},
		{
			type: 'image-text-below',
			text: 'blurb',
			link: null,
			grid: {
				full: false,
				columnStart: 6,
				columnEnd: 10
			},
			src:
				'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
		},
		{
			type: 'image-text-below',
			text: 'blurb',
			link: null,
			grid: {
				full: true
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
