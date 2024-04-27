import { FC, lazy } from 'react';
import { LoginFormPropsI } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormPropsI>>(
    () => import('./LoginForm'),
);
