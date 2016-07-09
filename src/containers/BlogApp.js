import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DataFetcher from '../actions/DataFetcherActions';

export default class BlogApp extends Component{
    static propTypes = {
        source: PropTypes.string.isRequired,
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
        const { dispatch } = this.props;
        return (
            <div>
                <h1>Street life test</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
  }
}

export default connect(
  mapStateToProps
)(BlogApp);
