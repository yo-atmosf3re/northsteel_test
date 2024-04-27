export type ModsType = Record<string, boolean | string | undefined>;

/**
 * Функция, которая позволяет определять несколько классов на один элемент: можно указывать несколько классов, можно указывать класс по некоторым условиям, можно указывать добавочные классы;
 * @param cls 
 * @param mods 
 * @param additional 
 * @returns 
 */
export const classNames = (
    cls: string,
    mods: ModsType = {},
    additional: Array<string | undefined> = [],
): string =>
    [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
