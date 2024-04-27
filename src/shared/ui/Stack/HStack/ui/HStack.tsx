import React from 'react';
import { Flex, FlexPropsI } from '../../Flex';

type HStackPropsI = Omit<FlexPropsI, 'direction'>;

/**
 * Имплементация `Flex` в виде горизонтального стека (обёртка для `Flex`, внутри которой задан `direction` со значением `row`);
 * @returns `Flex`
 */
export const HStack = (props: HStackPropsI) => {
    return (
        <Flex
            direction="row"
            {...props}
        />
    );
};
