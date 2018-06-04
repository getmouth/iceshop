import reducer from './Freezer';
import * as FLAVOURS from '../constants/Flavours';
import { updateTemperature, addProductToFreezer } from '../actions/Freezer';

describe('Freezer reducer',()=> {
  it ('should store temperature in the state', ()=> {
    const newState = reducer(undefined, updateTemperature(-5));
    
    expect(newState.temperature).toEqual(-5);
  })

  it ('should store the product in the state', ()=> {
    const newState = reducer(undefined, addProductToFreezer(FLAVOURS.VANILLA, 5));
    
    expect(newState.flavours[FLAVOURS.VANILLA]).toEqual(5);
  })

  it ('should add the scoop to a flavour if it already exist', ()=> {
    const oldState = {
      flavours: {
        [FLAVOURS.VANILLA]: 7
      }
    }

    const newState = reducer(oldState, addProductToFreezer(FLAVOURS.VANILLA, 5));
    
    expect(newState.flavours[FLAVOURS.VANILLA]).toEqual(12);
  })

  it ('should not overflow the freezer ', ()=> {
    const oldState = {
      flavours: {
        [FLAVOURS.VANILLA]: 57
      }
    }

    const newState = reducer(oldState, addProductToFreezer(FLAVOURS.VANILLA, 5));
    
    expect(newState.flavours[FLAVOURS.VANILLA]).toEqual(60);
  })

});