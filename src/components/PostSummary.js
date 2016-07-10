import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Tag from './Tag';
import Topic from './Topic';
import Comment from './Comment';

export default class PostSummary extends Component {
    constructor(props){
        super(props);

        this.state = {
            displayComments: false
        };
    }

    static propTypes = {
        post: PropTypes.object.isRequired
    }

    render(){
        const { post } = this.props;
        const _this = this;
        return (
            <article className='post' id={this.props.questionId}>
                <Link to={`/posts/${post.id}`}>
                    <h2>{post.subject}</h2>
                </Link>
                <div className="list">
                    <span>Tags: </span>
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
                {_this.renderComments()}
            </article>
        );
    }

    toggleComments(e){
        this.setState({
          displayComments: !this.state.displayComments
        });
    }

    renderComments(){
        const { post } = this.props;
        const _this = this;
        let template = '';
        if(this.state.displayComments){
            template = (
                <div className="post">
                    <a onClick={(e) => _this.toggleComments()} >Hide all comments</a>
                    <div className="list">
                    {
                        post.comments.map((comment) => {
                            return (
                                <Comment key={comment.id} comment={comment}/>
                            )
                        })
                    }
                    </div>
                </div>
            )
        }else{
            template = (
                <a onClick={(e) => _this.toggleComments()} >view all comments</a>
            );
        }
        return (
            template
        )
    }
}
