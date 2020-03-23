import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Container} from "react-bootstrap";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <Container>
                <div className="post-header">
                    <h2 className="post-title">{post.frontmatter.title}</h2>
                    <i className="post-date">{post.frontmatter.date}</i>
                </div>

                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Container>

        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      excerpt
    }
  }
`