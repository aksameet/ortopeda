import { ACTIVE_OBSZAR } from '../actions';

export default (state = null, action) => {

    switch(action.type) {
        case ACTIVE_OBSZAR :
            return action.payload;
        default:
            return state;
    }
}