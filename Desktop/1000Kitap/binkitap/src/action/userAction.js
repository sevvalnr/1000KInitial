// // actions.js

// import axios from 'axios';

// export const addData = (data) => async (dispatch) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/your-endpoint', data);
//     dispatch({
//       type: 'ADD_DATA',
//       payload: response.data,
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
// actions.js
// userAction.js

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';


export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST
  };
};

export const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user
  };
};

export const createUserFailure = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error
  };
};

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user
  };
};

export const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error
  };
};

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST
  };
};

export const deleteUserSuccess = (email) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: email
  };
};

export const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error
  };
};

