import { lazy } from 'react';

export const ForbiddenPageLazy = lazy(
    () =>
        // for dev
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => resolve(import('./ForbiddenPage')), 1500);
        }),
);
