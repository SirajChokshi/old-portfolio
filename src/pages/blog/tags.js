import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import { Link, graphql } from 'gatsby';
const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <SEO title="Tags" />
    <h2 className={'page-title'}>Tags</h2>
    <ul
      className={'tags'}
      style={{ listStyle: 'none', paddingLeft: 0, marginTop: '2em' }}
    >
      {group
        .sort((a, b) => b.totalCount - a.totalCount)
        .map(tag => (
          <li key={tag.fieldValue} style={{ display: 'inline-block' }}>
            <h3 style={{ margin: '0.6em 0' }}>
              <Link
                data-tag-name={tag.fieldValue}
                className={'tag-link'}
                to={`/blog/tags/${tag.fieldValue
                  .replace(/([A-Z]+)/g, ' $1')
                  .replace(/([A-Z][a-z])/g, ' $1')
                  .replace(/\s+/g, '-')
                  .toLowerCase()
                  .substring(1)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </h3>
          </li>
        ))}
    </ul>
    <Link to="/blog" className="project-link">
      &larr; All Posts
    </Link>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};
export default TagsPage;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
