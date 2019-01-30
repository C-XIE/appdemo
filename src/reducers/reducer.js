import { combineReducers } from 'redux';

function home(state = { list: [], comments: [], user: null }, action) {
   switch (action.type) {
      case "getlogin_success":
         return {
            ...state,
            user: action.data
         }
      case "initlist_success":
         return {
            ...state,
            list: action.data
         }
      case "loadmore_success":
         return {
            ...state,
            list: [...state.list, ...action.data]
         }
      case "preloadmore_success":
         return {
            ...state,
            list: [...action.data, ...state.list]
         }
      case "getcomments_success":
         return {
            ...state,
            comments: action.data
         }
      default:
         return state
   }
}

export default combineReducers({
   home
});