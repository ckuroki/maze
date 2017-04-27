import { combineReducers } from 'redux';
import player from './player';
import screen from './screen';

const rootReducer = combineReducers({
  player,
  screen
});

export default rootReducer;
