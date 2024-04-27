import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { LoginPage } from '@/pages/LoginPage';
import { NewsPage } from '@/pages/NewsPage';
import {
    APP_ROUTES,
    getRouteLogin,
    getRouteMain,
    getRouteNews,
    getRouteProfile,
} from '@/shared/const/consts';
import { AppRoutesPropsType } from '@/shared/types/router';

export const routeConfig: Record<APP_ROUTES, AppRoutesPropsType> = {
    [APP_ROUTES.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [APP_ROUTES.LOGIN]: {
        path: getRouteLogin(),
        element: <LoginPage />,
    },
    [APP_ROUTES.NEWS]: {
        path: getRouteNews(),
        element: <NewsPage />,
    },
    [APP_ROUTES.PROFILE]: {
        path: getRouteProfile(),
        element: <ProfilePage />,
        authOnly: true,
    },
};
