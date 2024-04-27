import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderItem.module.scss';
import { HeaderItemI } from '../../../model/types/header';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

interface HeaderItemPropsI {
    item: HeaderItemI;
}

/**
 * Компонента, отрисовывающая кликабельный элемент в `Header`;
 */
export const HeaderItem: React.FC<HeaderItemPropsI> = memo(({ item }) => {
    const { path, text } = item;
    return (
        <AppLink
            to={path}
            className={classNames(cls['header-item'])}
            activeClassName={cls.active}
        >
            <Text title={text} />
        </AppLink>
    );
});
