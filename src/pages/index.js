import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = ({ data: { content } }) => {
  return (
    <main style={pageStyles}>
      <h1>Content</h1>
      {content.nodes.map(node => (
        <div key={node.title}>
          <h2>{node.title}</h2>
          <p>{node.subtitle}</p>
          <GatsbyImage image={node.image.childImageSharp.gatsbyImageData} alt={node.title} />
        </div>
      ))}
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query {
    content: allLocalContentCities {
      nodes {
        title
        subtitle
        image {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
      }
    }
  }
`
