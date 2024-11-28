import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import routes from '@app/routes';
import { StoreProvider } from '@app/store';
import '@app/styles/index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <StoreProvider>
            <RouterProvider router={routes} />
        </StoreProvider>
    </StrictMode>,
);
