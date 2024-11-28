import { buildSelector } from '@app/store';


export const [useCounter, getCounter]= buildSelector(state => state.counter);
