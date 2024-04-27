import React, { memo } from 'react';
import { Loader } from '@/shared/ui/Loader';
import { Card } from '@/shared/ui/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderPropsI {
    className?: string;
}

/**
 * Компонента отрисовывающая загрузку для страниц;
 * @param className
 */
export const PageLoader: React.FC<PageLoaderPropsI> = memo(({ className }) => {
    return (
        <Card
            max
            fullHeight
            className={classNames(cls['page-loader'], {}, [className])}
            variant="light"
        >
            <Loader />
        </Card>
    );
});
