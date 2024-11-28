import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { counterReducer } from '@entities/Counter';
import { ReduxStoreWithManager, StateSchema } from '../types/StateSchema';
import { createReducerManager } from './reducerManager';
import { Api } from '../api/api';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,

        [Api.reducerPath]: Api.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store: ReduxStoreWithManager = configureStore({
        reducer: reducerManager.getReducerMap(),
        devTools: import.meta.env.DEV,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({}).concat(Api.middleware),
    });

    store.reducerManager = reducerManager;

    return store;
}
