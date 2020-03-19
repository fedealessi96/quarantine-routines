import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const AboutPage = ({data}) => (
    <Layout>
        <SEO title="About" />
        <h2>About this project</h2>

        <p>This project is part of my 'Activity list' that I created during Italy's lockdown. I don't know if someone will ever read or visit this,
            but I'm doing it for personal purposes mostly.</p>
        <p>I'm always seeking for new things to learn, so I decided to try with Gatsby.js during this period, and hopefully,
            this little blog will be useful to understand all the things I read in the tutorial 😂 </p>

            <p>
            I don't know how far I will bring this project, nor I know if I'm gonna come back at it tomorrow, but the thing that's truly
            important to me is myself staying focused on something and try to do as many productive things as possible to take advantage of this
            disadvantaging situation.

            I won't delete nothing I will write in the posts I will create: the only thing I will do with this blow will be keep adding stuff, including
            thoughts, posts, and improvements (you will see only the ones related with frontend, but I can ensure I will try my best to have the best backend
            I can).




        </p>


    </Layout>
);


export default AboutPage