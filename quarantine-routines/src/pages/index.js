import React from "react"
import {graphql, Link} from "gatsby"
import ContainerWrapper from "../components/container";

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1></h1>
    <p>Hey there! </p>
    <p>The only thing you will see here will be what I do (or did) during Italy's lockdown.</p>

      <ContainerWrapper data={data}/>
  </Layout>
);

export default IndexPage


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
