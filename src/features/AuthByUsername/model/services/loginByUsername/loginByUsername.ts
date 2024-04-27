/* eslint-disable no-promise-executor-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigI } from '@/app/providers/StoreProvider';
import { UserI, userActions } from '@/entities/User';
import { FAKE_ACCOUNT } from '@/shared/const/consts';

interface LoginByUsernamePropsI {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    UserI,
    LoginByUsernamePropsI,
    ThunkConfigI<string>
>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;
        const { password, username } = authData;
        try {
            /**
             * Имитация задержки асинхронной операции;
             */
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (username === FAKE_ACCOUNT.username && password === FAKE_ACCOUNT.password) {
                const userData: UserI = { username: 'Admin', id: '1' };
                dispatch(userActions.setAuthData(userData))
                return userData;
            }  
            
            return thunkApi.rejectWithValue('Имя пользователя или пароль введены не верно');
            
        } catch (error) {
            console.log(error, 'Login');
            return rejectWithValue('error');
        }
    },
);

