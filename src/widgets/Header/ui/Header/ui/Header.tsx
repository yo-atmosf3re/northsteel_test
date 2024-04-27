import React, { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useHeaderItems } from '../../../model/selectors/getHeaderItem';
import { HeaderItem } from '../../HeaderItem';
import { HStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card';

interface HeaderPropsI {
    className?: string;
}

/**
 * Компонента, которая отрисовывает ссылки с переходами по страницам;
 * @param className
 */
export const Header: React.FC<HeaderPropsI> = memo(({ className }) => {
    const headerItemsList = useHeaderItems();

    const itemsList = useMemo(
        () =>
            headerItemsList.map((item) => (
                <HeaderItem
                    item={item}
                    key={item.path}
                />
            )),
        [headerItemsList],
    );

    return (
        <Card
            className={classNames('', {}, [className])}
            variant="light"
            padding="16"
        >
            <HStack
                gap="16"
                justify="end"
            >
                {itemsList}
            </HStack>
            
        </Card>
    );
});
