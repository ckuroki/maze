import * as types from '../constants/ActionTypes';

const initialState = {
  locations: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LOCATIONS: {
      return {
      ...state,
      locations: action.locations
      };
    }
    default:
      return state;
  }
}
