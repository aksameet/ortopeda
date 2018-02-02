import { combineReducers } from 'redux';
import ActiveObszar from './reducer_active_obszar';
import Obszary from './reducer_obszary';
import Zakresy from './reducer_zakres-gabi';

const rootReducer = combineReducers({
	activeObszar: ActiveObszar,
	obszary: Obszary,
	zakresy: Zakresy
});

export default rootReducer;