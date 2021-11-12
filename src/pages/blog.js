import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticleCard from '../components/ArticleCard';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => {
      return <ArticleCard key={edge.node.id} post={edge.node.frontmatter} />;
    });

  return (
    <Layout>
      <SEO title="Blog" />
      <h2 className="work-header page-title">Blog</h2>
      <div style={{ marginTop: '1.5em' }}>{posts}</div>
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
