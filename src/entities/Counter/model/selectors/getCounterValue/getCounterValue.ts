import {  buildSelector } from '@app/store';


export const [useCounterValue, getCounterValue] = buildSelector(
    state => state.counter.value,
);
