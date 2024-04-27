import { Suspense, memo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';
import { AppRoutesPropsType } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';

/**
 * Компонента, которая мапит роуты из routeConfig'a;
 */
const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesPropsType) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
