import React from "react"

import Layout from "../components/layout"
import DiaryEvents from "../components/diaryEvents";

import SEO from "../components/seo"
import {graphql} from "gatsby";

const AboutPage = ({data}) => (

    <Layout>
        <SEO title="Diary" />
        <h2>Storyline of the site</h2>
        <p>In this section I will post every changes I make day by day, starting from the day I deployed this site for the first time</p>

        <DiaryEvents days={data.diaryPagesJson.days}/>

    </Layout>

);


export default AboutPage;


export const query = graphql`
  query {
  diaryPagesJson {
        days {
            date
            event
        }
    }
  }

`


