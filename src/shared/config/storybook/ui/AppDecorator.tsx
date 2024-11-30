import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryContext, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router';
import { StateSchema, StoreProvider } from '@app/store';
import { counterReducer } from '@entities/Counter';
import '@app/styles/index.scss';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    counter: counterReducer,
};

export const AppDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    ) =>
    (Story: StoryFn, context: StoryContext) => {
        const theme = context.globals.theme;

        return (
            <BrowserRouter>
                <StoreProvider
                    initialState={state as StateSchema}
                    asyncReducers={{
                        ...(defaultAsyncReducers as ReducersMapObject<StateSchema>),
                        ...(asyncReducers as ReducersMapObject<StateSchema>),
                    }}
                >
                    <div className="app">
                        <Story />
                    </div>
                </StoreProvider>
            </BrowserRouter>
        );
    };
