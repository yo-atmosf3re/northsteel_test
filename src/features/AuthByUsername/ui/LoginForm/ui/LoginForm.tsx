import React, { Suspense, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginError } from '../../../model/selectors/getLoginError/getLoginError';
import { useLoginIsLoading } from '../../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { useLoginPassword } from '../../../model/selectors/getLoginPassword/getLoginPassword';
import { useLoginUsername } from '../../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../../model/services/loginByUsername/loginByUsername';
import { loginReducer, useLoginActions } from '../../../model/slice/loginSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';
import cls from './LoginForm.module.scss';
import { Loader } from '@/shared/ui/Loader';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRouteProfile } from '@/shared/const/consts';

export interface LoginFormPropsI {
    className?: string;
}

const INITIAL_REDUCERS: ReducersList = {
    loginForm: loginReducer,
};

/**
 * Компонента с формой авторизации;
 * @param className
 */
const LoginForm: React.FC<LoginFormPropsI> = memo(({ className }) => {
    const dispatch = useAppDispatch();
    const { setPassword, setUsername } = useLoginActions();
    const username = useLoginUsername();
    const password = useLoginPassword();
    const error = useLoginError();
    const isLoading = useLoginIsLoading();
    const navigate = useNavigate();

    const onChangeUsername = useCallback(
        (value: string) => {
            setUsername(value);
        },
        [setUsername],
    );

    console.log(username);

    const onChangePassword = useCallback(
        (value: string) => {
            setPassword(value);
        },
        [setPassword],
    );

    const onClickLogin = useCallback(async () => {
        const result = await dispatch(
            loginByUsername({
                username,
                password,
            }),
        );

        if (result.meta.requestStatus === 'fulfilled') {
            navigate(getRouteProfile());
        }
    }, [dispatch, username, password, navigate]);

    return (
        <DynamicModuleLoader reducers={INITIAL_REDUCERS}>
            <Suspense fallback={<Loader />}>
                <VStack
                    gap="16"
                    max
                    className={classNames(cls['login-form'], {}, [className])}
                >
                    <Text
                        variant="primary"
                        title="Форма авторизации"
                    />
                    {error ? (
                        <Text
                            variant="error"
                            text="Имя пользователя или пароль введены не верно"
                        />
                    ) : null}
                    <Input
                        autofocus
                        type="text"
                        className={cls.input}
                        placeholder="Введите логин"
                        value={username}
                        onChange={onChangeUsername}
                    />
                    <Input
                        type="text"
                        className={cls.input}
                        placeholder="Введите пароль"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <Button
                        onClick={onClickLogin}
                        variant="outline"
                        className={cls['login-button']}
                        disabled={isLoading}
                    >
                        Войти
                    </Button>
                </VStack>
            </Suspense>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
