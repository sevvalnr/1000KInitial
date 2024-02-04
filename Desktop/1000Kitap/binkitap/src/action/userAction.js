// actions.js

import axios from 'axios';

export const addData = (data) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/your-endpoint', data);
    dispatch({
      type: 'ADD_DATA',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error:', error);
  }
};
