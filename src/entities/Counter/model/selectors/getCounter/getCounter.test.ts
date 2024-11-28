import { StateSchema } from '@app/store';
import { describe, expect, it} from 'vitest'
import { getCounter } from './getCounter';

describe('getCounter', () => {
    it('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
