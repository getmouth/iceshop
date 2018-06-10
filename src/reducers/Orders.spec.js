import OrderReducer from './Orders';
import { placeOrder, PLACE_ORDER,fulfillOrder,FULFILL_ORDER, payForOrder,
cancelOrder, CANCEL_ORDER } from '../actions/Orders';
import VANILLA from '../constants/Flavours';

describe('Orders reducer', ()=> {
  it ('should store the order in the state', () => {
    const newState = OrderReducer(undefined, placeOrder({
      customerName: 'Cindy',
      cone: false,
    }));
    

    expect(newState.length).toEqual(1);
    expect(newState[0].customerName).toEqual('Cindy');
    expect(newState[0].cone).toEqual(false);
    expect(typeof newState[0].createdAt).toEqual('number');
    expect(newState[0].status).toEqual('pending');
  });

  it ('should contain the scoops object in the payload', () => {
    const action = placeOrder({
      scoops: {
        [VANILLA]: 1,
      }
    });

    expect(action.payload.scoops).toEqual({[VANILLA]: 1});
  });

  it ( 'should mark a given order as fulfilled in the store', () => {
    const existingState = [
      {
        customerName: 'Cindy',
        status: 'pending',
      }
    ];
    const newState = OrderReducer( existingState, fulfillOrder(0));
    expect(newState[0].status).toEqual('fulfilled');
  });

  it ( 'should mark a given order as paid in the store', () => {
    const existingState = [
      {
        customerName: 'Cindy',
        status: 'pending',
      }
    ];
    const newState = OrderReducer( existingState, payForOrder(0));
    expect(newState[0].status).toEqual('paid');
  });

  it ( 'should remove a given order in the store', () => {
    const existingState = [
      {
        customerName: 'Cindy',
        status: 'pending',
      }
    ];
    const newState = OrderReducer( existingState, cancelOrder(0));
    expect(newState).toEqual([]);
  });


});