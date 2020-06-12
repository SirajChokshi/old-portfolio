import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DESIGNS from "../DESIGNS"
import Image from "../components/image"

const SecondPage = () => {

  const isQueryMatched = (post, query) => {
    // const q = query.toLowerCase();
    // for (const tag of post.tags) {
    //     if (tag.toLowerCase().includes(q)) return true;
    // }
    // return post.year.toLowerCase().includes(q) || post.name.toLowerCase().includes(q) || (typeof post.desc === "string" && post.desc.toLowerCase().includes(q))
    return true
  }

  const [query, updateQuery] = useState("")

  return <Layout>
    <SEO title="Design" />
    <h2 className={"page-title"}>Design</h2>
    <Image imgName={'profile.png'} />
    {/* <section className="filter">
      <input onChange={e => updateQuery(e.target.value)} />
    </section> */}
    <div className="design-grid" style={{marginTop: "1.5em"}}>
      {
        DESIGNS.filter(design => isQueryMatched(design, query)).map(p => (
          <div className="item">
            <img src={"/" + p.path} style={{width: "100%"}} />
            <div className="info">
              <h3>{p.name}</h3>
            </div>
          </div>
        ))
      }
    </div>
  </Layout>
}

export default SecondPage
