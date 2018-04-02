import { ACTIVE_GABINET } from '../actions';

export default (state = null, action) => {

    switch(action.type) {
        case ACTIVE_GABINET :
            return action.payload;
        default:
            return state;
    }
}