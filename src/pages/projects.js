import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PROJECTS from "../PROJECTS"
import WorkCard from "../components/WorkCard"

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h2 className={"page-title"}>Projects</h2>
    <div className="grid-wrapper" style={{marginTop: "1.5em"}}>
      {
        PROJECTS.map(p => (
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
)

export default SecondPage
