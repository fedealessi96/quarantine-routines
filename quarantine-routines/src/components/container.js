import React from "react";
import {Container} from 'react-bootstrap';
import { graphql } from "gatsby";



const ContainerWrapper = (props) => {
    console.log(props);
    return (<Container>
        <div>{props.data.allMarkdownRemark.totalCount} posts</div>
    </Container>)
};

export default ContainerWrapper;