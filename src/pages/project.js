import React from 'react';
import Layout from '../components/Layout';

const ProjectBlurb = () => {
	return <p>Project Title (rich text?)</p>;
};

const projectItems = [
	{
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation',
		blurb: 'item description (rich text?)'
	},
	{
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation',
		blurb: 'item description (rich text?)'
	},
	{
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation',
		blurb: 'item description (rich text?)'
	},
	{
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation',
		blurb: 'item description (rich text?)'
	}
];

const ProjectItem = ({ src, alt, blurb }) => {
	return (
		<div>
			<img src={src} alt={alt} />
			<p>{blurb}</p>
		</div>
	);
};

const ProjectPage = () => (
	<Layout>
		<ProjectBlurb />
		{projectItems.map(props => (
			<ProjectItem {...props} />
		))}
	</Layout>
);

export default ProjectPage;
