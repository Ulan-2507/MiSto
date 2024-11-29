import { StateSchema } from '@app/store';
import { getCounterValue } from './getCounterValue';
import { describe, test, expect } from 'vitest';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
