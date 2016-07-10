import React, { Component, PropTypes } from 'react';

//We can merge conceptually Tag and Topic it always depends what objectives
//we have in our application, I assume that the styles and the components
//should it be independent so it will be easy to mantain and scale even
//if we use the same class currently, we may want to change in the future
export default class Topic extends Component {
    static propTypes = {
        //I decided to encapsulate the object from the post, we can also
        //use the validate adding each property slug,name,etc.
        topic: PropTypes.object.isRequired
    }

    render(){
        const { topic } = this.props;
        return (
            <div className="tag text-faded" id={topic.slug}>{topic.name}</div>
        )
    }
}
