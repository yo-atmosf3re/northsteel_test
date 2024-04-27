import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { NewsDetails } from '@/features/NewsDetails';

interface NewsPagePropsI {
    className?: string;
}

/**
 *
 * @param className
 */
export const NewsPage: React.FC<NewsPagePropsI> = memo(({ className }) => {
    return (
        <Card
            max
            fullHeight
            className={classNames('', {}, [className])}
            variant="light"
        >
            <NewsDetails />
        </Card>
    );
});
