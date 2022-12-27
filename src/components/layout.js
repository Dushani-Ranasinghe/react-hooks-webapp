import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from "./Styles/GlobalStyles"

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
        <main>{children}</main>
    </>
  )
}

export default Layout
