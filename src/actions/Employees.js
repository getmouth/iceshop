import axios from 'axios';

export const actionTypes = {
  FETCH_EMPLOYEES_REQUEST : 'FETCH_EMPLOYEES_REQUEST',
  FETCH_EMPLOYEES_SUCCESS : 'FETCH_EMPLOYEES_SUCCESS',
  FETCH_EMPLOYEES_FAILURE : 'FETCH_EMPLOYEES_FAILURE',
};


export const fetchEmployees = () => {
  return (dispatch, getState) => {
    dispatch ({
      type: actionTypes.FETCH_EMPLOYEES_REQUEST,
    });

    return axios.get('/employees.json')
    .then((response) => dispatch({
      type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
      payload: response.data,
    }))
    .catch(err =>  dispatch({
      type: actionTypes.FETCH_EMPLOYEES_FAILURE,
      payload: err.message,
    }))
  }
}

export default {
  fetchEmployees,
}