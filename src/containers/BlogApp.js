import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DataFetcher from '../actions/DataFetcherActions';
import * as BlogActions from '../actions/BlogActions';
import PostList from '../components/PostList'
export default class BlogApp extends Component{
    static propTypes = {
        source: PropTypes.string.isRequired,
        messages: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(DataFetcher.fetchDataIfNeeded());
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        DataFetcher.invalidateRequest();
    }

    render(){
        const { messages, dispatch } = this.props;
        const isEmpty = messages.length == 0;
        const actions = bindActionCreators(BlogActions, dispatch);

        if(isEmpty){
            return (
                <div>
                    <h1>Street life test</h1>
                    {isEmpty}
                </div>
            );
        }
        return (
            <article>
                <h1>Street life test</h1>
                <section className="posts">
                {
                    messages
                    .filter(item => item.posted_at)
                    .map((post) => {
                        return (<PostList
                            key={post.id}
                            post={post}
                         />);
                    })
                }
                </section>
                {isEmpty}
            </article>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      messages: state.DataFetcher.messages || []
  }
}

export default connect(
  mapStateToProps
)(BlogApp);
