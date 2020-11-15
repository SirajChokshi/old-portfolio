import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleCard from "../components/ArticleCard";
import "./blogTemplate.css"
import { FaCalendarAlt, FaTag } from "react-icons/fa"

const mountHighlighting = async () => {
    try {
        const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")

        await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
    } catch (err) {
        console.error(err);
    }
}

export default function Template({
    data
}) {

    mountHighlighting().catch(e => console.error(e));

    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <div className="blog-post-container">
                <div className="blog-post">
                    <div className="blog-post-meta">
                        <h2 className={"page-title"}>{frontmatter.title}</h2>
                        <h3 className="meta">
                            <FaCalendarAlt style={{marginRight: "6px"}} />{frontmatter.date}
                        </h3>
                        <ul className="tags">
                            <li className="tags-label"><FaTag style={{marginRight: "6px", verticalAlign: "middle", display: "inline-block"}} /></li>
                            {frontmatter.tags.map(tag => (
                                <li key={tag}><Link to={`/blog/tags/${tag.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1").replace(/\s+/g, '-').toLowerCase().substring(1)}`} data-tag-name={tag}>{tag}</Link></li>
                            ))}
                        </ul>
                      {frontmatter.photo && <img src={frontmatter.photo} alt={frontmatter.title} />}
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
    )
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
    },
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
`