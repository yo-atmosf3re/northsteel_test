import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { ModsType, classNames } from '../../../lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../../Stack';
import { Text } from '../../Text';

type HTMLInputPropsType = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSizeType = 's' | 'm' | 'l';

interface InputPropsI extends HTMLInputPropsType {
    className?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    size?: InputSizeType;
}

/**
 * Компонента-кастомный инпут, входящая в комплект UI-kit проекта;
 * @param className
 * @param value
 * @param onChange
 * @param autofocus - флаг, отвечающий за фокус на инпуте;
 * @param readonly - передаёт этот флаг в свойство `readOnly` самого инпута (для чтения инпут или нет);
 */
export const Input: React.FC<InputPropsI> = memo(
    ({
        type = 'text',
        className,
        value,
        label,
        onChange,
        placeholder,
        autofocus,
        readonly,
        size = 'm',
        ...otherProps
    }) => {
        const ref = useRef<HTMLInputElement>(null);
        const [isFocused, setIsFocused] = useState(false);

        useEffect(() => {
            if (autofocus) {
                setIsFocused(true);
                ref.current?.focus();
            }
        }, [autofocus]);

        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        const onBlurHandler = () => {
            setIsFocused(false);
        };

        const onFocusHandler = () => {
            setIsFocused(true);
        };

        const mods: ModsType = {
            [cls.readonly]: readonly,
            [cls.focused]: isFocused,
        };

        const input = (
            <div
                className={classNames(cls['input-wrapper'], mods, [
                    className,
                    cls[size],
                ])}
            >
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    readOnly={readonly}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    className={cls.input}
                    placeholder={placeholder}
                    {...otherProps}
                />
            </div>
        );

        if (label) {
            return (
                <HStack
                    max
                    gap="8"
                >
                    <Text text={label} />
                    {input}
                </HStack>
            );
        }

        return input;
    },
);
