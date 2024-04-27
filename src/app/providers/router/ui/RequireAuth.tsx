import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRouteLogin } from '@/shared/const/consts';
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData';

interface RequireAuthProps {
    children: JSX.Element;
}

/**
 * Функция, которая ограничивает доступ к некоторым роутам в зависимости от наличия авторизационных данных;
 * @param children - содержимое RequireAuth-компоненты, которой оборачивается другая компонента. Дочерний компонент отображается только в случае, если есть авторизационные данные;
 */
export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate
                to={getRouteLogin()}
                state={{ from: location }}
                replace
            />
        );
    }

    // ? При наличии auth возвращает children;
    return children;
}
