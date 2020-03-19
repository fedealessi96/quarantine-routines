import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Container} from "react-bootstrap";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Container>
            <h1>{post.frontmatter.title}</h1>

        </Container>

    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`