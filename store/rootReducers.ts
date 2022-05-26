import { combineReducers } from 'redux'
import user from './user/reducer'
import { HYDRATE } from 'next-redux-wrapper';

const reducers = combineReducers({
    user,
});

const rootReducers = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        return { ...state, ...action.payload };
    }
    return reducers(state, action);
}

export default rootReducers