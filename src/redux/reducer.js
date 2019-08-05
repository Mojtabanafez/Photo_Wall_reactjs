import posts from '../data/posts'
const postReducer = function posts(state = posts, action) {
    switch(action.type){
        case 'REMOVED_POST':{
            console.log(state);
            
           return [...state.slice(0,action.index), ...state.slice(action.index+1)]
        }break;
        case 'ADD_POST':{
            return [...state, action.post]
        }break;
        default:return state;
    }
}
console.log("this is reducer");
export default postReducer;