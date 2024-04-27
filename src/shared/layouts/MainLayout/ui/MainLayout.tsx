import React, { ReactElement, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutPropsI {
    className?: string;
    header: ReactElement;
    content: ReactElement;
}

/**
 * Главный каркас всего приложения;
 * @param className
 * @param header
 * @param content
 */
export const MainLayout: React.FC<MainLayoutPropsI> = memo(
    ({ className, content, header }) => {
        return (
            <div className={classNames(cls['main-layout'], {}, [className])}>
                <header className={cls.header}>{header}</header>
                <main className={cls.content}>{content}</main>
            </div>
        );
    },
);
