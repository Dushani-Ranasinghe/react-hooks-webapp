import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css" 

import Logo from "../images/logos/logo.svg"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
    <img src={Logo} width="50" alt="logo"/>
      <h1>
        Design and code React apps
      </h1>
      <p>Don't skip design. Learn design and code, by building real apps with React and Swift.
      Complete courses about best tools.</p>
      <p className={styles.intro}>
        <b>Pages:</b>{" "}
        <Link to="/page-2/"> Go to page 2</Link>
      </p>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
