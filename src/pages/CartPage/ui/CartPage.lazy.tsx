import { lazy } from 'react';

export const CartPageLazy = lazy(
    () =>
        // for dev
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => resolve(import('./CartPage')), 1500);
        }),
);
