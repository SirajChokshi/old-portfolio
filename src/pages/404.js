import React from "react"

import { Link } from "gatsby";
import { Redirect } from '@reach/router'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
  <Redirect noThrow to={`/`} />
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p style={{fontSize: "20px"}}>This page was likely deleted or moved elsewhere. Sorry for the inconvenience!</p>
      <Link to="/" className="button btn">Return Home</Link>
  </Layout>
);

export default NotFoundPage
