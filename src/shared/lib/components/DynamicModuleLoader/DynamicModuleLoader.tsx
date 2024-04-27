/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
import { Reducer } from '@reduxjs/toolkit';
import React, { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import {
    ReduxStoreWithManagerI,
    StateSchema,
    StateSchemaKeyType,
} from '@/app/providers/StoreProvider';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKeyType]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderPropsI {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

/**
 * Позволяет использовать RTK-менеджер инкапсулировано, передавая в аргументы этой функции объект с ключом в виде названия редьюсера из `StateSchema` и значением в виде редьюсера, которому пренадлежит данный ключ-имя, а так же флаг, который указывает на то будет ли удаляться редьюсер или нет при размонтировании UI-компоненты;
 *
 * @param reducers - сам редьюсер;
 * @param removeAfterUnmount - удалять редьюсер при размонтировании UI-компоненты, которая обёрнута в DynamicModuleLoader, или нет. По умолчанию `true`;
 */
export const DynamicModuleLoader: React.FC<DynamicModuleLoaderPropsI> = ({
    children,
    reducers,
    removeAfterUnmount = true,
}) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManagerI;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKeyType];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKeyType, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKeyType);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, []);

    return <>{children}</>;
};
