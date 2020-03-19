import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const MyPage = ({data}) => (
    <Layout>
        <SEO title="fedealessi1996" />
        <h2>Hey you! I'm Federico</h2>
        <p>By the day I'm writing this, I'm 23 and almost ended my studies in Computer Science, in Milan.</p>
        <p>I love playing videogames (did someone say League of Legends?) and Computer Science. I'm a Pokemon fanatic and if you need a friend
        to share some good music to, count on me! I'm also a mega SUSHI LOVER, and I love traveling the world (hopefully next country will be Japan).
            I also love reading, especially fantasies: Lord of the Rings, Game of Thrones, Harry Potter are always been my favorite sagas, but in these days I
            felt in Love with His Dark Matierials by Philip Pullamn, too good to be true.
        </p>

        <h2>Life in quarantine</h2>
        <p>Things changed fast in my life (as in every Italian's one) since the COVID-19 broke out. We were put under lockdown so fast that we couldn't
        even notice. Now every habit I had has been changed, and I had to adapt to this new life style.</p>
        <p>To defeat the boredom of everyday's life in quarantine, I decided to schedule the activity of my days.
        I didn't want to spend all my day playing League of Legends or Pokemon Mistery Dungeon (even if I always dreamed to do it in the past...), so
            I decided to divide my days and doing many different things, to make this lockdown period to end faster.
            The things I kept in consideration were:
            <p></p>
            <ul>
                <li>Study</li>
                <li>Study</li>
                <li>Study</li>
                <li>Study</li>
                <li>Study</li>
            </ul>

            nah, just kidding. My list contains:
            <p></p>

            <ul>
                <li>Sleep at least 8 hours a night</li>
                <li>Study</li>
                <li>Reading </li>
                <li>Fitness</li>
                <li>Piano lessons</li>
                <li>IT related stuff</li>
                <li>League of Legends ( ... )</li>

                And I also try to read as many news as I can early in the morning.

            </ul>

            <p></p>

            For each activity I also tried to estimate a minimum and maximum amount of hours to dedicate to each one (at least I would felt guilty if I spent too much time with Lol and no time for
            anything else on the same day...).
            After creating this 'TODO' list to I thought it could be a funny idea to practice with a React framework (Gatsby.js) and create this blog, in which I would report the same things I had n the list
            with more details attached.

            I don't know if this is a good idea and if I will continue on this path the next days, but at least I learned a brand new framework and how to deploy a site on Github Pages... and, hey, I'm practicing my English 😀
        </p>


    </Layout>
);

export default MyPage;