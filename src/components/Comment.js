import React, { Component, PropTypes } from 'react';

export default class Comment extends Component {
    static propTypes = {
        //I decided to encapsulate the object from the post, we can also
        //use the validate adding each property slug,name,etc.
        comment: PropTypes.object.isRequired
    }

    render(){
        const { comment } = this.props;
        return (
            <div id={comment.id}>
                <img src={comment.author.avatar}/>
            </div>
        )
    }
}
