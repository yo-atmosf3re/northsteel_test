import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';
import {
    MountedReducersType,
    ReducerManagerI,
    StateSchema,
    StateSchemaKeyType,
} from './StateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManagerI {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateSchemaKeyType[] = [];

    const mountedReducers: MountedReducersType = {};

    return {
        getReducerMap: () => reducers,

        getMountedReducers: () => mountedReducers,

        reduce: (state, action) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            mountedReducers[key] = true;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            mountedReducers[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
