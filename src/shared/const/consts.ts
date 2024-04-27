// ? Общие константы и енамы приложения;

export const FAKE_ACCOUNT: {username: string, password: string} = {
    username: 'Admin',
    password: '12345'
}

/**
 * Функция, возвращающая путь для `MainPage`;
 */
export const getRouteMain = () => '/';

/**
 * Функция, возвращающая путь для `LoginPage`;
 */
export const getRouteLogin = () => '/login';

/**
 * Функция, возвращающая путь для `NewsPage`;
 */
export const getRouteNews = () => `/news`;

/**
 * Функция, возвращающая путь для `ProfilePage`;
 */
export const getRouteProfile = () => '/profile';

/**
 * Список с роутами приложения;
 */
export enum APP_ROUTES {
    MAIN = 'main',
    LOGIN = 'login',
    NEWS = 'news',
    PROFILE = 'profile',
}
