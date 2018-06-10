import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { actionTypes, fetchEmployees } from './Employees';

describe ('fetchEmployees()', () => {
  it ('should dispatch the REQUEST action when the action is dispatched', () => {
    const spy = jest.fn();
    const thunk = fetchEmployees();
    thunk(spy);

    expect(spy.mock.calls[0][0]).toEqual({
      type: actionTypes.FETCH_EMPLOYEES_REQUEST,
    });
  });

  it ('Should dispatch the SUCCESS action whent the data is fetched successfully', () => {
    const fakeData = [1, 2, 3];
    const mockAxios = new MockAdapter(axios);

    mockAxios.onGet('/employees.json').reply(200, fakeData);

    const spy = jest.fn();
    const thunk = fetchEmployees();
    thunk(spy).then(()=> {
      expect(spy.mock.calls[1][0]).toEqual({
        type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
        payload: fakeData,
      });
    });

  });

  it ('Should dispatch the FAILURE action when the data is fetch fails', () => {

    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet('/employees.json').reply(404);

    const spy = jest.fn();
    const thunk = fetchEmployees();
    thunk(spy).then(()=> {
      expect(spy.mock.calls[1][0]).toEqual({
        type: actionTypes.FETCH_EMPLOYEES_FAILURE,
        payload: 'Request failed with status code 404',
      });
    });

  });

});