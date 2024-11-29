export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    CART = 'cart',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteCart = (id: string) => `/cart/${id}`;
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteCart(':id')]: AppRoutes.CART,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
