import { placeOrder, PLACE_ORDER } from '../actions/Orders';

const OrderReducer = (state= [], action) => {
  switch(action.type) {
    case PLACE_ORDER:
    return [
      ...state,
      {
        ...action.payload,
      status: 'pending',
      }
    ]
    default:
    return state;
  }
}

export default OrderReducer;