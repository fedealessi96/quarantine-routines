import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const AboutPage = ({data}) => (
    <Layout>
        <SEO title="About" />
        <h2>Storyline of the site</h2>
        <p>In this section I will post every changes I make day by day, starting from the day I deployed this site for the first time</p>

        <p>
            <h3>19th March 2020</h3>
            Deployed this site with About, Diary and fedealessi96 sections. No post are visible, only the example one, used to test the page creation logic.
        </p>

    </Layout>
);


export default AboutPage;