export const PLACE_ORDER = 'PLACE_ORDER';
export const FULFILL_ORDER = 'FULFILL_ORDER';
export const PAY_FOR_ORDER = 'PAY_FOR_ORDER';
export const CANCEL_ORDER = 'CANCEL_ORDER';


export const placeOrder = ({customerName, createdAt=Date.now(), cone=true, scoops}) => {
  return {
    type: PLACE_ORDER,
    payload: {customerName, createdAt, cone, scoops},
  };
};


export const fulfillOrder = (id) => {
  return {
    type: FULFILL_ORDER,
    payload: id,
  };
};

export const payForOrder = (id) => {
  return {
    type: PAY_FOR_ORDER,
    payload: id,
  };
};
export const cancelOrder = (id) => {
  return {
    type: CANCEL_ORDER,
    payload: id,
  };
};

export default {
  placeOrder,
  fulfillOrder,
  cancelOrder,
  payForOrder,
}