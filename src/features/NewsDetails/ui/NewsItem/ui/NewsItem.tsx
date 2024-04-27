import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NewsItem.module.scss';
import { Card } from '@/shared/ui/Card';
import { NewsItemI } from '@/entities/News';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';

interface NewsItemPropsI {
    className?: string;
    item: NewsItemI;
}

/**
 * Компонента с карточкой новости;
 * @param className
 * @param item
 */
export const NewsItem: React.FC<NewsItemPropsI> = memo(
    ({ className, item }) => {
        const { content, date, title } = item;
        return (
            <Card
                className={classNames(cls['news-item'], {}, [className])}
                variant="light"
            >
                <VStack
                    gap="16"
                    max
                >
                    <Text
                        title={title}
                        align="center"
                        bold
                        variant="accent"
                    />
                    <Text text={content} />
                    <HStack
                        justify="between"
                        max
                    >
                        <Text
                            text={date}
                            size="s"
                            bold
                        />
                        <Button>
                            <Text text="Читать далее..." />
                        </Button>
                    </HStack>
                </VStack>
            </Card>
        );
    },
);
