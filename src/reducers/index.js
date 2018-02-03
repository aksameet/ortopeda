import { combineReducers } from 'redux';
import ActiveObszar from './reducer_active_obszar';
import Obszary from './reducer_obszary';
import ActiveGabinet from './reducer_active_gabinet';
import Gabinety from './reducer_gabinety';
import Zakresy from './reducer_zakres-gabi';

const rootReducer = combineReducers({
	activeObszar: ActiveObszar,
	obszary: Obszary,
	activeGabinet: ActiveGabinet,
	gabinety: Gabinety,
	zakresy: Zakresy
});

export default rootReducer;