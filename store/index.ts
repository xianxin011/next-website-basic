import { applyMiddleware, createStore, Middleware, StoreEnhancer, Store } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';

import rootReducer from './rootReducers';
import rootSaga from './rootSagas';

export interface SagaStore extends Store {
    sagaTask?: Task;
}

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
