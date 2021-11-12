import React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/post-link';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticleCard from '../components/ArticleCard';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => {
      return <ArticleCard key={edge.node.id} post={edge.node.frontmatter} />;
    });

  return (
    <Layout>
      <SEO title="Blog" />
      <h2 className="work-header page-title">Blog</h2>
      <div style={{ marginTop: '1.5em' }}>{Posts}</div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            abstract
            tags
          }
        }
      }
    }
  }
`;
