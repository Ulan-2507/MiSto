import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { StoreProvider } from '@app/store';
import '@app/styles/index.css';
import { AppRouter } from '@app/routes';

const root = createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <AppRouter />
            </StoreProvider>
        </BrowserRouter>
    </StrictMode>,
);
