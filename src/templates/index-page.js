import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

const images = [
	{
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
	},
	{
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
	},
	{
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
	},
	{
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
	},
	{
		src:
			'http://www.kirafreije.com/images/Kira_Freije_Forgetting_and_Unforgetting_2017_Cass_Sculpture_Foundation'
	}
];

const Image = ({ src, alt, projectId = 'project' }) => {
	return (
		<Link to={projectId} className="" title="">
			<img src={src} alt={alt} />
		</Link>
	);
};

export const IndexPageTemplate = ({}) => (
	<div>
		{images.map(props => (
			<Image {...props} />
		))}
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array
	})
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
					}
					heading
					description
				}
			}
		}
	}
`;
