import React, { memo } from 'react';
import { MainLayout } from '../../MainLayout';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card';

/**
 * Компонента, которая отрисовывает скелетоны во время загрузки страницы;
 * @param className
 */
export const AppLoaderLayout: React.FC = memo(() => {
    return (
        <MainLayout
            header={
                <Card
                    variant="light"
                    padding="16"
                >
                    <HStack
                        gap="16"
                        justify="end"
                    >
                        <Skeleton
                            width={100}
                            height={28}
                            border="22px"
                        />
                        <Skeleton
                            width={100}
                            height={28}
                            border="22px"
                        />
                        <Skeleton
                            width={100}
                            height={28}
                            border="22px"
                        />
                    </HStack>
                </Card>
            }
            content={
                <Card
                    max
                    fullHeight
                    border="round"
                    padding="0"
                >
                    <Skeleton
                        border="12px"
                        width="100%"
                        height="100%"
                    />
                </Card>
            }
        />
    );
});
