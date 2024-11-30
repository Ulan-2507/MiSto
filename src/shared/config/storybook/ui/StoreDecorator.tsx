import { ReducersList, StateSchema, StoreProvider } from '@app/store';
import { counterReducer } from '@entities/Counter';
import { StoryFn } from '@storybook/react';

const defaultAsyncReducers: ReducersList = {
    counter: counterReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (Story: StoryFn) => {
        return (
            <StoreProvider
                initialState={state as StateSchema}
                asyncReducers={{
                    ...defaultAsyncReducers,
                    ...asyncReducers,
                }}
            >
                <Story />
            </StoreProvider>
        );
    };
