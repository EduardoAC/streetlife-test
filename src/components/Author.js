import React, { Component, PropTypes } from 'react';

export default class Author extends Component {
  static propTypes = {
    author: PropTypes.object.isRequired,
  }

  render() {
    const { author } = this.props;
    const authorClass = [
      'author',
      'spacing-margin-left-sm',
      'spacing-margin-right-sm',
      'spacing-margin-bottom-sm',
    ].join(' ');
    return (
            <div className={authorClass}
                id={author.id}>
                <span className="author__avatar">
                    <img src={author.avatar}/>
                </span>
                <h3 className="text-default text-semibold">
                    <span>Posted by </span>
                    <span className="text-highlight">{author.display_name}</span>
                </h3>
            </div>
        );
  }
}
