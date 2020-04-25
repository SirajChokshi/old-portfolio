import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleCard from "../components/ArticleCard";
import "./blogTemplate.css"

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

    mountHighlighting().then(r => console.log("Highlight Ran"));
    const { allMarkdownRemark } = data;
    const { edges } = allMarkdownRemark
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .slice(0, 3)
        .map(edge => (
            <>
                <ArticleCard
                    key={edge.node.id}
                    post={edge.node.frontmatter}
                />
            </>
        ));

    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <div className="blog-post-container row">
                <div className="blog-post columns eight">
                    <div className="blog-post-meta">
                        <h2 style={{margin: 0}}>{frontmatter.title}</h2>
                        <h3 className="meta">
                            <i className="fas fa-calendar" /> {frontmatter.date}
                        </h3>
                        <ul className="tags">
                            <li className="tags-label"><i className="fas fa-folder-open" /> Tags: &nbsp;</li>
                            {frontmatter.tags.map(tag => (
                                <li><Link to={`/blog/tags/${tag}`}>{tag}</Link></li>
                            ))}
                        </ul>
                        <img src={frontmatter.photo} alt={frontmatter.title} />
                    </div>
                </div>
                <div className="columns offset-by-four" />
            </div>
            <div className="blog-post-container row">
                <div className="blog-post columns eight">
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
                <div className="columns three offset-by-one side-feed">
                    <div className="content-wrapper">
                        <h3>Recent Posts</h3>
                        {Posts}
                    </div>
                </div>
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