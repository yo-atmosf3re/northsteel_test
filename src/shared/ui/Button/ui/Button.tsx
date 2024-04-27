import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ModsType, classNames } from '../../../lib/classNames/classNames';
import cls from './Button.module.scss';

/**
 * Стилистические типы кнопки;
 * @param clear
 * @param outline
 * @param filled
 */
export type ButtonVariantType = 'clear' | 'outline' | 'filled';

/**
 * Цветовые варианты кнопки;
 * @param normal
 * @param success
 * @param error
 */
export type ButtonColorType = 'normal' | 'success' | 'error';

/**
 * Размеры кнопки, значения которых соответствуют значениям css-переменным из global.scss (используются размеры из переменных, которые ответственны за размер шрифтов);
 * @param M
 * @param L
 * @param XL
 */
export type ButtonSizeType = 'm' | 'l' | 'xl';

interface ButtonPropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariantType;
    size?: ButtonSizeType;
    disabled?: boolean;
    children: ReactNode;
    fullWidth?: boolean;
    color?: ButtonColorType;
}

/**
 * Кнопка с возможностью кастомизации, входящая в обновлённый комплект UI-kit проекта;
 *
 * @param className
 * @param children - содержимое кнопки;
 * @param theme - тема кнопки;
 * @param size - размер кнопки;
 * @param disabled - возможность отключить кнопку;
 * @param fullWidth - флаг, указывающий на то, нужно ли растягивать кнопку по всей ширине или нет;
 */
export const Button: React.FC<ButtonPropsI> = ({
    className,
    children,
    variant = 'outline',
    size = 'm',
    disabled,
    fullWidth,
    color = 'normal',
    ...otherProps
}) => {
    const mods: ModsType = {
        [cls.disabled]: disabled,
        [cls['full-width']]: fullWidth,
    };
    const additionalClasses: Array<string | undefined> = [
        className,
        cls[variant],
        cls[size],
        cls[color],
    ];
    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(cls.button, mods, additionalClasses)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
