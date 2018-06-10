import { updateTemperature, addProductToFreezer, doSomthing } from './Freezer';
import { UPDATE_TEMPERATURE, ADD_PRODUCT_TO_FREEZER } from '../constants/Freezer';

describe('updateTemperature()', () => {
  it ('should contain the right action type', () => {
    const action = updateTemperature();

    expect(action.type).toEqual(UPDATE_TEMPERATURE);
  });

  it ('should contain the temperature in the payload', () => {
    const action = updateTemperature(-5);
    
    expect(action.payload).toEqual(-5);
  });
});


describe('addProductToFreezer()', () => {
  it ('should contain the right action type', () => {
    const action = addProductToFreezer();

    expect(action.type).toEqual(ADD_PRODUCT_TO_FREEZER);
  });

  it ('should contain a name in the payload', () => {
    const action = addProductToFreezer('foo');
    
    expect(action.payload.name).toEqual('foo');
  });

  it ('should contain the amout in the payload', () => {
    const action = addProductToFreezer('foo',5);
    
    expect(action.payload.amount).toEqual(5);
  });

  it ('should return the default payload amount', () => {
    const action = addProductToFreezer('foo');
    
    expect(action.payload.amount).toEqual(20);
  });
});

describe('doSomething()', ()=> {
  const getState = () => ({
    Freezer: {
      temperature: 10,
    }
  });

  it ('should dispatch the "FOO" action', ()=> {
    const dispatch = jest.fn();
    const action = doSomthing();
    action(dispatch, getState);

    expect(dispatch.mock.calls.length).toEqual(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('FOO');
  })

  
  it ('should use the temperature in the state for the payload', ()=> {
    const dispatch = jest.fn();
    const action = doSomthing();
    action(dispatch, getState);

    expect(dispatch.mock.calls.length).toEqual(1);
    expect(dispatch.mock.calls[0][0].payload).toEqual(10);
  })
});