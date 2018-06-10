import { UPDATE_TEMPERATURE, ADD_PRODUCT_TO_FREEZER } from '../constants/Freezer';
import * as FLAVOURS from '../constants/Flavours'.


const INITIAL_STATE = {
  temperature: null,
  flavours: {
    [FLAVOURS.STRAWBERRY]: 10,
    [FLAVOURS.SALTED_CARAMEL]: 20,
  },
}

const FreezerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_TEMPERATURE:
    return {
      ...state,
      temperature: action.payload
    };
    
    case ADD_PRODUCT_TO_FREEZER:
    const amount = (state.flavours[action.payload.name] || 0) +  action.payload.amount;
    return {
      ...state,
      flavours: {
        ...state.flavours,
        [action.payload.name]: Math.min(amount, 60)
      }
   
    }
    default:
    return state;
  }

}

export default FreezerReducer;