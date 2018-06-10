import { PLACE_ORDER, FULFILL_ORDER,
PAY_FOR_ORDER, CANCEL_ORDER } from '../actions/Orders';

const OrderReducer = (state= [], action) => {
  switch(action.type) {
    case PLACE_ORDER:
    return [
      ...state,
      {
        ...action.payload,
      status: 'pending',
      }
    ];
    case FULFILL_ORDER:
    return state.map((order, index)=> {
      if (index === action.payload) {
        return {
          ...order,
          status: 'fulfilled',
        }
      }
      return order;
    });

    case PAY_FOR_ORDER:
    return state.map((order, index)=> {
      if (index === action.payload) {
        return {
          ...order,
          status: 'paid',
        }
      }
      return order;
    });

    case CANCEL_ORDER:
    return state.filter((order, index)=> {
      return index !== action.payload;
    });

    default:
    return state;
  }
}

export default OrderReducer;