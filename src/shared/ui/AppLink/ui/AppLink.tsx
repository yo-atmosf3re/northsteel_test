import React, { ReactNode, memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'red';

interface AppLinkPropsI extends LinkProps {
    className?: string;
    variant?: AppLinkTheme;
    children?: ReactNode;
    activeClassName?: string;
}

/**
 * Кастомизированная компонента, входящая в обновлённый комплект UI-kit проекта, для создания ссылок;
 * @param className
 * @param variant - тема ссылки;
 * @param children
 */
export const AppLink: React.FC<AppLinkPropsI> = memo(
    ({
        className,
        children,
        variant = 'primary',
        activeClassName = '',
        to,
        ...otherProps
    }) => (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.appLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    ),
);
