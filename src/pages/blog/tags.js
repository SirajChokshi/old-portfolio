import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby"
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
        <h2 className="work-header">Tags</h2>
        <ul style={{listStyle: "none", paddingLeft: 0}}>
            {group.map(tag => (
                <li key={tag.fieldValue}>
                    <Link className="view-more" style={{textAlign: "left", borderBottom: "solid lightgrey 1px"}} to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue} ({tag.totalCount})
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

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
}
export default TagsPage
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
`