export const PLACE_ORDER = 'PLACE_ORDER';


export const placeOrder = ({customerName, createdAt=Date.now(), cone=true, scoops}) => {
  return {
    type: PLACE_ORDER,
    payload: {customerName, createdAt, cone, scoops},
  };
};

