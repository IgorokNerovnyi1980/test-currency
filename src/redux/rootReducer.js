import { Type } from './actions';

const initialState = {
  currentlyName: [],
  curentlyValue: {},
};
const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_NAME_CURRENTLY:
      return { ...state, currentlyName: action.payload };
    case Type.GET_VALUE_CURRENTLY:
      return { ...state, curentlyValue: action.payload };
    default:
      return state;
  }
};
export default rootReducers;
