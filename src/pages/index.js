import React from "react"

import Layout from "../components/layout"
import AuthorInfo from "../components/authorInfo"
import BlogCardContainer from "../components/blogCardContainer"

class Blog extends React.Component {
    render () {
        return (
            <Layout>
                <AuthorInfo></AuthorInfo>
                <BlogCardContainer></BlogCardContainer>
            </Layout>
        )
    }
}
export default Blog;