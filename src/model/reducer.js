import { combineReducers } from 'redux';
import { reducer as homeReducer } from './home/home.reducer';

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;
