import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './blogTemplate.scss';
import { FaCalendarAlt, FaTag } from 'react-icons/fa';
import * as codeLoader from '@deckdeckgo/highlight-code/dist/loader';

const mountHighlighting = async () => {
  try {
    await codeLoader.defineCustomElements();
  } catch (err) {
    console.error(err);
  }
};

export default function Template({ data }) {
  mountHighlighting();

  const { markdownRemark } = data;
  const {
    frontmatter: { title, tags, date, photo },
    html,
  } = markdownRemark;

  return (
    <Layout>
      <SEO title={title} />
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="blog-post-meta">
            <h2 className={'page-title'}>{title}</h2>
            <h3 className="meta">
              <FaCalendarAlt style={{ marginRight: '6px' }} />
              {date}
            </h3>
            <ul className="tags">
              <li className="tags-label">
                <FaTag
                  style={{
                    marginRight: '6px',
                    verticalAlign: 'middle',
                    display: 'inline-block',
                  }}
                />
              </li>
              {tags.map(tag => (
                <li key={tag}>
                  <Link
                    to={`/blog/tags/${tag
                      .replace(/([A-Z]+)/g, ' $1')
                      .replace(/([A-Z][a-z])/g, ' $1')
                      .replace(/\s+/g, '-')
                      .toLowerCase()
                      .substring(1)}`}
                    data-tag-name={tag}
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
            {photo && <img src={photo} alt={title} />}
          </div>
        </div>
      </div>
      <div className="blog-post-container">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        abstract
        photo
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
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
