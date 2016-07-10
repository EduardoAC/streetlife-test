import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Tag from './Tag';
import Topic from './Topic';

export default class PostSummary extends Component {
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
                <div className="list">
                {
                    post.tags.map((tag) => {
                        return (
                            <Tag key={tag.id} tag={tag}/>
                        )
                    })
                }
                </div>
                <div className="list">
                {
                    post.topics.map((topic) => {
                        return (
                            <Topic key={topic.slug} topic={topic}/>
                        )
                    })
                }
                </div>
                <p>{post.body}</p>
                <p>Comments: {post.comments?post.comments.length:0}</p>
                <a href="#">view all comments</a>
            </article>
        );
    }
}
