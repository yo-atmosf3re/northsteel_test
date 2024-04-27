import { PayloadAction } from '@reduxjs/toolkit';
import { USER_LS_KEY } from '@/shared/const/localstorage';
import { UserI, UserSchema } from '../types/user';
import { initAuthData } from '../services/initAuthData';
import { buildSlice } from '@/shared/lib/store';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = buildSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<UserI>) => {
            state.authData = action.payload;
            /**
             * Имитация сохранения т.н токена;
             */
            localStorage.setItem(USER_LS_KEY, 'true');
        },
        logout: (state) => {
            state.authData = undefined;
            /**
             * Удаление токена после логаута - что может быть проще;
             */
            localStorage.removeItem(USER_LS_KEY);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                initAuthData.fulfilled,
                (state) => {
                    state._inited = true;
                },
            );
        builder
            .addCase(
                initAuthData.rejected,
                (state) => {
                    state._inited = true;
                },
            );
    }
});

export const {
    actions: userActions,
    reducer: userReducer,
    useActions: useUserActions
} = userSlice;
