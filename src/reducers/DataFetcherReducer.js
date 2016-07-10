import * as types from '../constants/ActionTypes';
import assign from 'lodash/object/assign';

const intialState = {
    isFetching: false,
    didInvalidate: false,
    data: []
}
export default function DataFetcher(state = intialState, action){
    switch (action.type){
        case types.REQUEST_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case types.RECEIVE_DATA:
            return Object.assign({},state, {
                isFetching: false,
                didInvalidate: false,
                messages: action.data.messages
            });
        case types.ABORT_REQUEST:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: true
        });
        default:
            return state;
    }
}
