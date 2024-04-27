/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

// ? Для файлов .scss;
declare module '*.scss' {
    // ? Типизация для classNames при импортах, нужно, чтобы не было проблем при использовании classNames, и чтобы можно было использовать scss.module;
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

/**
 * Собственноручно написанный DeepPartial.
 * DeepPartial даёт возможность частично или полностью скопировать state. Некоторые свойства, при их наличии, могут быть полностью скопированы (глубоко) или нет - при их отсутствии;
 */
type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

/**
 * Классический Record, но с опциональными свойствами. Даёт возможность создавать объекты с опциональными свойствами;
 */
type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
