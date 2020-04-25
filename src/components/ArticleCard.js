import { Link } from "gatsby"
import React from "react"

import "./articlecard.css"

const ArticleCard = ({post}) => (
    <section className="article-card" >
        <div className="info">
            <h3><i className="fas fa-calendar" />{post.date}</h3>
            <h2><Link to={post.path}>{post.title}</Link></h2>
            <p>
                {post.abstract}
            </p>
            <ul>
                {
                    (post.tags).map(tag => (
                        <li><Link to={`/blog/tags/${tag.toLowerCase()}`}>{tag}</Link></li>
                        )
                    )
                }
            </ul>
            {/*<Link to={post.path} className="read-more"><span>Read More</span></Link>*/}
        </div>
    </section>
);

export default ArticleCard;