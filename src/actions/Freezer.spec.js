import { updateTemperature, addProductToFreezer } from './Freezer';
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