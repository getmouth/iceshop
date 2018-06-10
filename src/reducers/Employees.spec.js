import { actionTypes } from '../actions/Employees';
import { fetchEmployees } from '../actions/Employees';
import EmployeesReducer from './Employees';

describe('Fetching employees', () => {
  describe('Request Start', () => {
    it('should set the loading property to `true` when the fetching start', () => {

      const result = EmployeesReducer(undefined, {
        type: actionTypes.FETCH_EMPLOYEES_REQUEST,
      });
      expect(result.loading).toEqual(true);
    });
  });

  describe('Successful fetch', () => {
    it('should set the loading property to `false` when the fetching ends', () => {

      const result = EmployeesReducer({loading: true}, {
        type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
      });
      expect(result.loading).toEqual(false);
    });

    it('should store employees data', () => {
      const fakeData = [1,2,3,];
      const result = EmployeesReducer(undefined, {
        type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
        payload: fakeData,
      });
      expect(result.data).toEqual(fakeData);
    });

  });

  describe('Failed fetch', () => {
    it('should set the loading property to `false` when the fetching ends', () => {

      const result = EmployeesReducer({loading: true}, {
        type: actionTypes.FETCH_EMPLOYEES_FAILURE,
      });
      expect(result.loading).toEqual(false);
    });

    it('should store the error', () => {
      const fakeError = '404 Not Found';
      const result = EmployeesReducer(undefined, {
        type: actionTypes.FETCH_EMPLOYEES_FAILURE,
        payload: fakeError,
      });
      expect(result.error).toEqual(fakeError);
    });
  });

});