import * as types from '../constants/ActionTypes';

const initialState = {
  screen: 18,
  x: 100,
  y: 100,
  life: 100
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.MOVE_UP: {
      return {
      y: state.y  - action.amount
      };
    }
    case types.MOVE_DOWN: {
      return {
      y: state.x  + action.amount
      };
    }
    case types.MOVE_LEFT: {
      return {
      x: state.x  - action.amount
      };
    }
    case types.MOVE_RIGHT: {
      return {
      x: state.x  + action.amount
      };
    }
    case types.LIFE_DOWN: {
      return {
      life: state.life - action.amount
      };
    }
    case types.LIFE_UP: {
      return {
      life: state.life + action.amount
      };
    }

    default:
      return state;
  }
}
