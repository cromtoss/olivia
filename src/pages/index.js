import * as React from "react"
import Layout from '../components/layout'
import Header from "../components/header"
import PhotoGrid from "../components/photoGrid"

const IndexPage = () => {
  return (
    <Layout>
        <Header />
        <PhotoGrid />
    </Layout>
  )
}

export default IndexPage
