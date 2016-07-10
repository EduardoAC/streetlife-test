import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DataFetcher from '../actions/DataFetcherActions';
import * as BlogActions from '../actions/BlogActions';
import PostSummary from '../components/PostSummary'
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
                <div className="overlay">
                    <div className="overlay__content">
                        <h1 className="text-xlarge text-align-center">Street life test</h1>
                        <div className="spinner">
                            <div className="spinner__cube1"></div>
                            <div className="spinner__cube2"></div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <article>
                <h1 className="text-xlarge">Street life test</h1>
                <section className="posts">
                {
                    messages
                    .filter(item => item.posted_at)
                    .map((post) => {
                        return (<PostSummary
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
