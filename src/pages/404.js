import React from "react"
import {Link, Redirect} from '@reach/router'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
  <Redirect noThrow to="/" />
  <Layout>
    <SEO title="404: Not found" />
    <h2 className="work-header page-title">404 - NOT FOUND</h2>
    <p style={{lineHeight: 2}}>The content you were looking for has likely moved :( <br />
      <Link to="/">Return home</Link> or <a href="https://archive.sirajchokshi.com/">check the archives</a>
    </p>
  </Layout>
  </>
)

export default NotFoundPage
