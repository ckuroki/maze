import * as types from '../constants/ActionTypes';

export function loadScreen(id) {
  return {
    type: types.LOAD_SCREEN,
    id
  }
}
