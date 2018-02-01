import { combineReducers } from 'redux';
import ActiveObszar from './reducer_active_obszar';
import Obszary from './reducer_obszary';

const rootReducer = combineReducers({
	activeObszar: ActiveObszar,
	obszary: Obszary
});

export default rootReducer;