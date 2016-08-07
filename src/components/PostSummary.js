import React, { Component, PropTypes } from 'react';
import { Author, Comment, Topic, Tag } from '.';

export default class PostSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayComments: false,
    };
  }

  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const { post } = this.props;
    const varThis = this;
    const postedAt = new Date(post.posted_at);
    return (
      <article className='post' id={this.props.questionId}>
          <h2 className="text-large text-semibold">{post.subject}</h2>
          <p className="text-small text-faded spacing-margin-bottom-md">
              <span>Posted at {postedAt.toLocaleDateString()} | </span>
              <span className="text-semibold text-highlight">
                {post.comments ? post.comments.length : 0}
              </span>
              <span> Comments</span>
          </p>
          <p className="text-default text-justify spacing-margin-bottom-md"
            dangerouslySetInnerHTML={{ __html: post.body }}></p>
          <div className="spacing-margin-bottom-sm">
              {post.tags.map((tag) => {
                return (
                        <Tag key={tag.id} tag={tag}/>
                  );
              })}
              {post.topics.map((topic) => {
                return (
                          <Topic key={topic.slug} topic={topic}/>
                      );
              })}
          </div>
          <Author author={post.author}/>
          {varThis.renderComments()}
      </article>
    );
  }

  toggleComments() {
    this.setState({
      displayComments: !this.state.displayComments,
    });
  }

  renderComments() {
    const { post } = this.props;
    const varThis = this;
    let template = '';
    if (!post.comments || post.comments.length === 0) {
      return false;
    }
    if (this.state.displayComments) {
      template = (
                <div className="post__comments">
                    <button className="post__button"
                        onClick={() => varThis.toggleComments()}>
                        <span>Hide all comments</span>
                        <div className="caret caret--bottom"></div>
                    </button>
                    <div className="comments">
                    {
                        post.comments.map((comment) => {
                          return (
                                <Comment key={comment.id} comment={comment}/>
                            );
                        })
                    }
                    </div>
                </div>
            );
    } else {
      template = (
          <button className="post__button"
              onClick={() => varThis.toggleComments()}>
              <span>View all comments</span>
              <div className="caret caret--right"></div>
          </button>
      );
    }
    return (
            template
        );
  }
}
