import { getRouteMain, getRouteNews, getRouteProfile } from "@/shared/const/consts";
import { HeaderItemI } from "../types/header";

export const useHeaderItems = (): HeaderItemI[] => {
    const sidebarItemsList: HeaderItemI[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
        },
        {
            path: getRouteNews(),
            text: 'Новости',
        },
        {
            path: getRouteProfile(),
            text: 'Профиль',
        },
    ];

    return sidebarItemsList;
};
