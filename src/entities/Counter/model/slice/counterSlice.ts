import { PayloadAction } from '@reduxjs/toolkit';

import { buildSlice } from '@app/store';

import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        add: (state, { payload }: PayloadAction<number>) => {
            state.value += payload;
        },
        decrement: state => {
            state.value -= 1;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducer,
    useActions: useCounterActions,
} = counterSlice;
