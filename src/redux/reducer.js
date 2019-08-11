import _posts from '../data/posts'
import { combineReducers } from 'redux'

function comments(state = {}, action) {
    switch (action.type) {
        case 'ADD_COMMENT': {
            if (!state[action.postId]) {
                return { ...state, [action.postId]: [action.comment] }
            } else {
                return { ...state, [action.postId]: [...state[action.postId], action.comment] }
            }
        } break;
        case 'LOAD_COMMENTS': {
            return action.comments
        } break;
        default: return state;
    }
}
function posts(state = _posts, action) {
    switch (action.type) {
        case 'REMOVED_POST': {
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        }
        case 'ADD_POST': {
            return [...state, action.post]
        }
        case 'LOAD_POSTS': {
            return action.posts;
        } break;
        default: return state;
    }
}
const rootReducer = combineReducers({ posts, comments })
console.log("this is reducer");
export default rootReducer;