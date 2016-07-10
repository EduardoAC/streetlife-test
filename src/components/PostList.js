import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class PostList extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    render(){
        const { post } = this.props;
        return (
            <article className='post' id={this.props.questionId}>
                <Link to={`/posts/${post.id}`}>
                    <h2>{post.subject}</h2>
                </Link>
                <p>{post.body}</p>
            </article>
        );
    }
}
