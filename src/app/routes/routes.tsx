import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { Counter } from '@entities/Counter';
import { HOME_PATH } from './name';

const routes: RouteObject[] = [{ path: HOME_PATH, element: <Counter /> }];


/* eslint-disable react-refresh/only-export-components */
export default createBrowserRouter(routes);
