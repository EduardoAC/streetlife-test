import React, { Component, PropTypes } from 'react';

export default class Comment extends Component {
  static propTypes = {
        // I decided to encapsulate the object from the post, we can also
        // use the validate adding each property slug,name,etc.
    comment: PropTypes.object.isRequired,
  }

  render() {
    const { comment } = this.props;
    const postedAt = new Date(comment.posted_at);
    return (
            <div className="comment" id={comment.id}>
                <div className="comment__wrap">
                    <div className="comment__meta">
                        <span className="comment__avatar">
                            <img src={comment.author.avatar}/>
                        </span>
                    </div>
                    <div className="comment__wrap-content">
                        <h3 className="text-default">
                          {comment.author.display_name}
                        </h3>
                        <p className="text-small text-no-margin text-faded">
                          {postedAt.toDateString()}
                        </p>
                        <p dangerouslySetInnerHTML={{ __html: comment.body }}>
                        </p>
                    </div>
                </div>
                <div className="comment__clean"></div>
            </div>
        );
  }
}
