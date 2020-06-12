import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PROJECTS from "../PROJECTS"
import WorkCard from "../components/WorkCard"

const SecondPage = () => {

  const isQueryMatched = (post, query) => {
    const q = query.toLowerCase();
    for (const tag of post.tags) {
        if (tag.toLowerCase().includes(q)) return true;
    }
    return post.year.toLowerCase().includes(q) || post.name.toLowerCase().includes(q) || (typeof post.desc === "string" && post.desc.toLowerCase().includes(q))
  }

  const [query, updateQuery] = useState("")

  return <Layout>
    <SEO title="Code" />
    <h2 className={"page-title"}>Code</h2>
    {/* <section className="filter">
      <input onChange={e => updateQuery(e.target.value)} />
    </section> */}
    <div className="grid-wrapper" style={{marginTop: "1.5em"}}>
      {
        PROJECTS.filter(project => isQueryMatched(project, query)).map(p => (
          <WorkCard
            key={"card_" + p.name}
            name={p.name}
            year={p.year}
            desc={p.desc}
            tags={p.tags}
            repo={p.repo}
            demo={p.demo}
            read={p.read}
          />
        ))
      }
    </div>
  </Layout>
}

export default SecondPage
