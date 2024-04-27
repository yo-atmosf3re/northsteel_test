import { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Header } from '@/widgets/Header';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initAuthData, useUserInited } from '@/entities/User';

const App = () => {
    const dispatch = useAppDispatch();
    const inited = useUserInited();

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    if (!inited) {
        return (
            <div className={classNames('app', {}, [])}>
                <AppLoaderLayout />
            </div>
        );
    }

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<AppLoaderLayout />}>
                <MainLayout
                    header={<Header />}
                    content={<AppRouter />}
                />
            </Suspense>
        </div>
    );
};

export default App;
