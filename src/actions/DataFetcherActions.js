import * as types from '../constants/ActionTypes';

function requestInProgress() {
  return {
    type: types.REQUEST_DATA,
  };
}

function receiveData(json) {
  return {
    type: types.RECEIVE_DATA,
    data: json,
  };
}

function fetchData() {
  return dispatch => {
    dispatch(requestInProgress());
    return fetch('https://s3-eu-west-1.amazonaws.com/streetlife-coding-challenge/newsfeed.json')
            .then(response => response.json())
            .then(json => dispatch(receiveData(json)));
  };
}

function shoulldFetchData(state) {
  const questions = state.questionsById;
  if (!questions) {
    return true;
  }
  if (questions.isFetching) {
    return false;
  }
  return questions.didInvalidate;
}

export function invalidateRequest() {
  return {
    type: types.ABORT_REQUEST,
  };
}

export function fetchDataIfNeeded() {
  return (dispatch, getState) => {
    if (shoulldFetchData(getState())) {
      return dispatch(fetchData());
    }
    return Error`Unexpected return`;
  };
}
