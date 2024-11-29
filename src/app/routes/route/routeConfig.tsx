import { RouteProps } from 'react-router';
import { AppRoutes, getRouteAbout, getRouteForbidden, getRouteMain, getRouteCart } from '../consts/route';
import { MainPage } from '@pages/MainPage';
import { AboutPage } from '@pages/AboutPage';
import { CartPage } from '@pages/CartPage';
import { ForbiddenPage } from '@pages/ForbiddenPage';
import { NotFoundPage } from '@pages/NotFoundPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
        [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.CART]: {
        path: getRouteCart(':id'),
        element: <CartPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
}