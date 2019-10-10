import { combineReducers } from 'redux';
import scenario from './src/scenario-builder/reducers';

const reducers = {
  scenario
};

export default combineReducers({
  ...reducers
});
