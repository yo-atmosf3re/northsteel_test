import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './{{pascalCase}}.module.scss';

interface {{pascalCase}}PropsI {
    className?: string;
}

/**
 *
 * @param className
 */
export const {{pascalCase}}: React.FC<{{pascalCase}}PropsI> = memo(({
    className,
}) => {
    return (
        <div
            className={classNames(cls.{{pascalCase}}, {}, [className])}
        >
            {{pascalCase}}
        </div>
    );
});
