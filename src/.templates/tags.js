import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleCard from "../components/ArticleCard";

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

    return (
        <Layout>
            <SEO title="Tags" />
            <h2 className="work-header">{tagHeader}</h2>
                {edges.map(({ node }) => {
                    const { slug } = node.fields
                    const post = node.frontmatter
                    return (
                        <>
                        <ArticleCard
                            key={slug}
                            post={post}
                        />
                        <hr />
                        </>
                    )
                })}
            {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
            <Link to="/blog/tags" className="view-more">All tags</Link>
        </Layout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
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
`