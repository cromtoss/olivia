import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

const Article = ({data}) => {
    const { html } = data.markdownRemark
    const { title, image } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className="w-4/5 mx-auto mt-9 article">
                <GatsbyImage image={image.childImageSharp.gatsbyImageData} className=" md:h-96 h-60"/>

                <section className="py-10">
                    <h2 className="font-semibold md:text-3xl text-xl py-4 capitalize">{title}</h2>

                    <div dangerouslySetInnerHTML={{ __html: html }}></div>

                </section>
            </div>
        </Layout>
    )
}

export default Article

export const query = graphql`
  query ArticleQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
            image {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                }
            }
      }
    }
  }
`