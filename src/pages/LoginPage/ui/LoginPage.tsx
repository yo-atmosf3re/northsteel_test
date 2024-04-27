import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginPage.module.scss';
import { LoginForm } from '@/features/AuthByUsername/ui/LoginForm';
import { Card } from '@/shared/ui/Card';

interface LoginPagePropsI {
    className?: string;
}

/**
 * Компонента, которая отрисовывает страницу с авторизацией;
 * @param className
 */
export const LoginPage: React.FC<LoginPagePropsI> = memo(({ className }) => {
    return (
        <Card
            max
            fullHeight
            className={classNames(cls['login-page'], {}, [className])}
            variant="light"
        >
            <LoginForm />
        </Card>
    );
});
