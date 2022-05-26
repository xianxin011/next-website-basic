import { examplesTypes } from './action'
import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from "redux";
const initialState = {
  examples: "examples"
}

function examplesData(state: any = initialState, action: any) {
  const { type, payload } = action
  switch (type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case examplesTypes.EXAMPLES_01:
      return {
        ...state,
        ...payload
      }
      
    case examplesTypes.EXAMPLES_02:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}


const examples = combineReducers({
  examplesData,
});
export default examples;