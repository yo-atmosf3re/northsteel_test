/* eslint-disable consistent-return */
/* eslint-disable no-promise-executor-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfigI } from '@/app/providers/StoreProvider';
import {  USER_LS_KEY } from '@/shared/const/localstorage';
import { UserI } from '../types/user';
import { userActions } from '../slice/userSlice';

/**
 * Функция, которая "инициализирует" авторизационные данные пользователя;
 */
export const initAuthData = createAsyncThunk<
    void,
    void,
    ThunkConfigI<string>
>('user/initAuthData', async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const hasUser = localStorage.getItem(USER_LS_KEY);

    if(!hasUser) return rejectWithValue('');

    try {
        /**
         * Имитация задержки асинхронной операции;
         */
        await new Promise(resolve => setTimeout(resolve, 1000));

        // ? По изначальной задумке предпологается, что данные о пользователе откуда-то будут браться, и инициализация будет происходить иначе и по-настоящему, а так как все данные моковые, то при наличии значения из LS можно просто присваивать какие-то данные сразу. Это всё нужно для того, чтобы обойти возможные проблемы с роутингом;
        const userData: UserI = {id: '1', username: 'Admin'}
        dispatch(userActions.setAuthData(userData));

    } catch (error) {
        console.log(error);
        return rejectWithValue('');
    }
});
