// reducers.js

import { combineReducers } from 'redux';
import { 
  CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE,
  UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE,
  FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
} from '../action/userAction';

const initialUserState = {
  user: [],
  loading: false,
  error: null
};

const usersReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
    case CREATE_USER_REQUEST:
    case UPDATE_USER_REQUEST:
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: [...state.user, action.payload]
      };
    case UPDATE_USER_SUCCESS:
      const updatedUsers = state.user.map(user =>
        user.email === action.payload.email ? action.payload : user
      );
      return {
        ...state,
        loading: false,
        user: updatedUsers
      };
    case DELETE_USER_SUCCESS:
      const filteredUsers = state.user.filter(user => user.email !== action.payload);
      return {
        ...state,
        loading: false,
        user: filteredUsers
      };
    case FETCH_USERS_FAILURE:
    case CREATE_USER_FAILURE:
    case UPDATE_USER_FAILURE:
    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: usersReducer
});

export default rootReducer;
