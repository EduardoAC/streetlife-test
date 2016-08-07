import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as DataFetcher from '../actions/DataFetcherActions';

import PostSummary from '../components/PostSummary';

class BlogApp extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(DataFetcher.fetchDataIfNeeded());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(DataFetcher.invalidateRequest());
  }

  render() {
    const { messages } = this.props;
    const isEmpty = messages.length === 0;

    if (isEmpty) {
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
            <div>
                <header className="header">
                    <div className="container">
                        <h1 className="text-xlarge">Street life test</h1>
                    </div>
                    </header>
                <article className="container">
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
            </div>
        );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.DataFetcher.messages || [],
  };
};

export default connect(
  mapStateToProps
)(BlogApp);
