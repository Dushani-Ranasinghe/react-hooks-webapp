import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from "./Styles/GlobalStyles"
import Header from "./header"

import "./layout.css"

const Layout = ({ children }) => {
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles/>
      <Header/>
        <main>{children}</main>
    </>
  )
}

export default Layout
