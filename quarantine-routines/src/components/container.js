import React from "react";
import {Container} from 'react-bootstrap';
import {Link} from 'gatsby';

const ContainerWrapper = (props) => {
    console.log(props.data);
    const posts = props.data;


    return (
        <Container>
            {posts.allMarkdownRemark.totalCount === 1 ? (<div>Only one post</div>) : (<div>{props.data.allMarkdownRemark.totalCount} total posts</div>)}

            <div className="post-wrapper">{props.data.allMarkdownRemark.edges.map(({ node }) => {
                console.log(node.frontmatter.date);
                return(
                    <div className="post" key={node.id}>
                        <Link
                            className={"post-title"}
                            to={node.fields.slug}
                        >
                            <h3>{node.frontmatter.title}


                                <span style={{color: '#555', float: "right"}}> ~ {node.frontmatter.date} </span>

                            </h3>
                        </Link>
                </div>
                );
        })}
        </div>
        </Container>
    )
};

export default ContainerWrapper;