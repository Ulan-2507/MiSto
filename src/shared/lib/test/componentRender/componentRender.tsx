import { render } from 'vitest-browser-react'
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema , StoreProvider } from '@app/store';




export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
    component: ReactNode,
    options: ComponentRenderOptions = {},
) => {
    const { route = '/', initialState } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState as StateSchema}>
              
                    {component}
              
            </StoreProvider>
        </MemoryRouter>,
    );
};
