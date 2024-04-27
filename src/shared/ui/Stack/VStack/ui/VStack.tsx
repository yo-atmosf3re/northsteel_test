import React from 'react';
import { Flex, FlexPropsI } from '../../Flex';

// ? Исключение direction из типизации для переопределения этого свойства в дальнейшем;
type VStackPropsI = Omit<FlexPropsI, 'direction'>;

/**
 * @returns `Flex`
 */
export const VStack = (props: VStackPropsI) => {
    const { align = 'start' } = props;
    return (
        <Flex
            {...props}
            direction="column"
            align={align}
        />
    );
};
