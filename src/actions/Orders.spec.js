import  {placeOrder, PLACE_ORDER } from '../actions/Orders';

describe('placeOrder()', () => {
  it ('should have the right action type', () => {
    const action = placeOrder({});
    expect(action.type).toEqual(PLACE_ORDER);
  });

  it ('should contain the date of creation in the payload', () => {
    const action = placeOrder({ createdAt: 5});
    expect(action.payload.createdAt).toEqual(5);
  });

  it ('should contain the cup/cone option in the payload', () => {
    const action = placeOrder({ cone: false});
    expect(action.payload.cone).toEqual(false);
  });
  
  
  it ('should default to cone if no option is specified', () => {
    const action = placeOrder({});
    expect(action.payload.cone).toEqual(true);
  });
  

  it ('should contain customer name in the payload', () => {
    const action = placeOrder({ customerName: 'Cindy'});
    expect(action.payload.customerName).toEqual('Cindy');
  });

  it ('should return current date in the payload if no date specified', () => {
    const action = placeOrder({});
    expect(typeof action.payload.createdAt).toEqual('number');
  });

});