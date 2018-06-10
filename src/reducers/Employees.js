import { actionTypes } from "../actions/Employees";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export const EmployeesReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EMPLOYEES_REQUEST:
    return {
      ...state,
      loading: true,
    };

    case actionTypes.FETCH_EMPLOYEES_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload,
    };

    case actionTypes.FETCH_EMPLOYEES_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };

    default:
    return state;
  };
};

export default EmployeesReducer;