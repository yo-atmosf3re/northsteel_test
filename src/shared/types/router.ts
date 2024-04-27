import { RouteProps } from 'react-router-dom';

/**
 * Объединяем в один тип RouteProps из RRD, добавляем поле authOnly, которое если true, то блокирует роуты;
 */
export type AppRoutesPropsType = RouteProps & {
    authOnly?: boolean;
};
