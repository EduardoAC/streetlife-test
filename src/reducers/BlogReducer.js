import * as types from '../constants/ActionTypes';

const intialState = {
};

export default function BlogReducer(state = intialState, action){
    switch (action.type){
        case types.OPEN_POST:
            return {
                ...state,
                postIndex: (action.postIndex >= 0
                    && action.postIndex < state.messages.length)?
                    action.postIndex : state.postIndex
            }
        default:
            return state;
    }
}
