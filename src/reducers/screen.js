import * as types from '../constants/ActionTypes';

const initialState = {
  id: 18
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.NORTH: {
      return {
      id: state.n
      };
    }
    case types.EAST: {
      return {
      id: state.e
      };
    }
    case types.WEST: {
      return {
      id: state.w
      };
    }
    case types.SOUTH: {
      return {
      id: state.s
      };
    }

    default:
      return state;
  }
}
