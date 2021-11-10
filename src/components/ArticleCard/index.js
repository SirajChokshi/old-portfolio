import { Link } from "gatsby"
import React from "react"
import { FaCalendarAlt } from "react-icons/fa"

import "./ArticleCard.scss"

const ArticleCard = ({ post, hidedate }) => (
  <section className="article-card">
    {hidedate ? (
      <span />
    ) : (
      <p className={"date"}>
        <FaCalendarAlt style={{ marginRight: "6px" }} />
        {post.date}
      </p>
    )}
    <div className="info">
      <h2>
        <Link to={post.path}>{post.title}</Link>
      </h2>
      <p>{post.abstract}</p>
      <ul className={"tags"}>
        {post.tags.map(tag => (
          <li>
            <Link
              to={`/blog/tags/${tag
                .replace(/([A-Z]+)/g, " $1")
                .replace(/([A-Z][a-z])/g, " $1")
                .replace(/\s+/g, "-")
                .toLowerCase()
                .substring(1)}`}
              data-tag-name={tag}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default ArticleCard
