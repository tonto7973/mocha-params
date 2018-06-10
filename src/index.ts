import { using as using$ } from './lib/using';
import { cases as cases$ } from './lib/cases';

declare const exports: any;

Object.defineProperty(exports, 'using', {
    get: () => {
        const context =
            typeof self !== 'undefined' ? self :
            typeof window !== 'undefined' ? window :
            typeof global !== 'undefined' ? global :
            { };
        const result = using$.bind(context);
        result.cases = cases$.bind(context);
        return result;
    },
    enumerable: true
});

export declare function using(...arg: any[]): Mocha.IUsingTestWrapper<any>;
export declare function using<T>(arg: T): Mocha.IUsingTestWrapper<T>;
export declare namespace using {
    type NotArray<T> = T & Exclude<T, any[]>;
    function cases(...arg: Array<any[]>): Mocha.IAnyCasesTestWrapper;
    function cases<T>(arg: NotArray<T>): Mocha.ICasesTestWrapper<T>;
}
