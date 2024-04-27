import React, { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NewsDetails.module.scss';
import { useNewsItems } from '../../../model/selectors/getNewsItems';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { NewsItem } from '../../NewsItem';

interface NewsDetailsPropsI {
    className?: string;
}

/**
 * Компонента, которая отрисовывает карточки с новостями;
 * @param className
 */
export const NewsDetails: React.FC<NewsDetailsPropsI> = memo(
    ({ className }) => {
        const newsList = useNewsItems();

        const itemsList = useMemo(
            () =>
                newsList?.map((item) => (
                    <NewsItem
                        item={item}
                        key={item.id}
                    />
                )),
            [newsList],
        );

        return (
            <Card className={classNames(cls['news-details'], {}, [className])}>
                <VStack gap="8">{itemsList}</VStack>
            </Card>
        );
    },
);
