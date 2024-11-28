import {
    EnhancedStore,
    Reducer,
    ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';

import { CounterSchema } from '@entities/Counter';

import { Api } from '../api/api';
import { createReduxStore } from '../config/store';

export interface StateSchema {
    counter: CounterSchema;

    [Api.reducerPath]: ReturnType<typeof Api.reducer>;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager?: ReducerManager;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
