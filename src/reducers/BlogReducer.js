import * as types from '../constants/ActionTypes';

const intialState = {
    test: true
};

export default function BlogReducer(state = intialState, action){
    switch (action.type){
        default:
            return state;
    }
}
