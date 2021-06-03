import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PROJECTS from "../PROJECTS"
import WorkCard from "../components/WorkCard"

const SORTERS = {
  date: (a, b, dir) => {
    const [monthA, yearA] = a.date.split("/").map(str => parseInt(str))
    const [monthB, yearB] = b.date.split("/").map(str => parseInt(str))

    const diff = (yearA - yearB) * dir

    if (diff < 0) {
      return -1
    }
    if (diff > 0) {
      return 1
    }
    return (monthA - monthB) * dir
  },
  alpha: (a, b, dir) => dir * a.name.localeCompare(b.name),
}

const SecondPage = () => {
  const [order, setOrder] = React.useState({ dir: -1, key: "date" })

  return (
    <Layout>
      <SEO title="Projects" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className={"page-title"}>Projects</h2>
        <span>
          <select
            style={{ border: "none", color: "#8a8a8a", maxWidth: "200px" }}
            name="order"
            defaultValue="date-down"
            id="order-projects-by"
            onChange={e => {
              const [key, dir] = e?.target?.value?.split("-")
              setOrder({
                dir: dir === "down" ? -1 : 1,
                key,
              })
            }}
          >
            <option value="date-up">Date (Ascending)</option>
            <option value="date-down">Date (Descending)</option>
            <option value="alpha-up">Alphabetical (Ascending)</option>
            <option value="alpha-down">Alphabetical (Descending)</option>
          </select>
        </span>
      </div>

      <div className="grid-wrapper" style={{ marginTop: "1.5em" }}>
        {[...PROJECTS]
          .sort((a, b) => SORTERS[order.key](a, b, order.dir))
          .map(p => (
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
          ))}
      </div>
    </Layout>
  )
}

export default SecondPage
