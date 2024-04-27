import {
    ReducersMapObject,
    AnyAction,
    CombinedState,
    Reducer,
    EnhancedStore,
} from '@reduxjs/toolkit';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';

// ? Типизация корневного редьюсера;
export interface StateSchema {
    // * Обычные редьюсеры;
    user: UserSchema;
    // * Асинхронные редьюсеры, которые впоследствии будут добавляться с помощью редьюсер-менеджера;
    loginForm?: LoginSchema;
}

export type StateSchemaKeyType = keyof StateSchema;

export type MountedReducersType = OptionalRecord<StateSchemaKeyType, boolean>;

/**
 * Типизация для редакс-менеджера;
 */
export interface ReducerManagerI {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeyType, reducer: Reducer) => void;
    remove: (key: StateSchemaKeyType) => void;
    getMountedReducers: () => MountedReducersType;
}

/**
 * Расширяем типизацию для редеакс стора совместно с reducerManager;
 */
export interface ReduxStoreWithManagerI extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManagerI;
}

// ? Тип для конфигурации createAsyncThunk, который указывается в дженериках этой функции;
export interface ThunkConfigI<T> {
    rejectValue: T;
    state: StateSchema;
}
