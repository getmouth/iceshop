import  {placeOrder, PLACE_ORDER, fulfillOrder, FULFILL_ORDER,
payForOrder, PAY_FOR_ORDER,CANCEL_ORDER,cancelOrder } from '../actions/Orders';
import OrderReducer from '../reducers/Orders';

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

describe ('fulfill order',() => {
  it ('it should have the right action type', () => {
    const action = fulfillOrder(5);
    expect(action.type).toEqual(FULFILL_ORDER);
  });

  it ('it should have the ID in the payload', () => {
    const action = fulfillOrder(5);
    expect(action.payload).toEqual(5);
  });

  it ('it should have the right action type', () => {
    const action = payForOrder(5);
    expect(action.type).toEqual(PAY_FOR_ORDER);
  });

  it ('it should have the ID in the payload', () => {
    const action = payForOrder(5);
    expect(action.payload).toEqual(5);
  });

  it ('it should have the right action type', () => {
    const action = cancelOrder(5);
    expect(action.type).toEqual(CANCEL_ORDER);
  });

  it ('it should have the ID in the payload', () => {
    const action = cancelOrder(5);
    expect(action.payload).toEqual(5);
  });

});