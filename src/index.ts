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

export declare function using<T>(arg: T): Mocha.IUsingTestWrapper<T>;
export declare function using<T1, T2>(arg1: T1, arg2: T2): Mocha.IUsingTestWrapper2<T1, T2>;
export declare function using<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): Mocha.IUsingTestWrapper3<T1, T2, T3>;
export declare function using<T1, T2, T3, T4>(arg1: T1, arg2: T2, arg3: T3, arg4: T4): Mocha.IUsingTestWrapper4<T1, T2, T3, T4>;
export declare function using<T1, T2, T3, T4, T5>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5):
    Mocha.IUsingTestWrapper5<T1, T2, T3, T4, T5>;
export declare function using<T1, T2, T3, T4, T5, T6>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6):
    Mocha.IUsingTestWrapper6<T1, T2, T3, T4, T5, T6>;
export declare function using<T1, T2, T3, T4, T5, T6, T7>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7):
    Mocha.IUsingTestWrapper7<T1, T2, T3, T4, T5, T6, T7>;
export declare function using(...arg: any[]): Mocha.IUsingTestWrapper<any>;
export declare namespace using {
    type NotArray<T> = T & Exclude<T, any[]>;
    function cases(...arg: Array<any[]>): Mocha.IAnyCasesTestWrapper;
    function cases<T>(arg: NotArray<T>): Mocha.ICasesTestWrapper<T>;
    function cases<T1, T2>(arg1: NotArray<T1>, arg2: NotArray<T2>): Mocha.ICasesTestWrapper<T1 | T2>;
    function cases<T1, T2, T3>(arg1: NotArray<T1>, arg2: NotArray<T2>, arg3: NotArray<T3>): Mocha.ICasesTestWrapper<T1 | T2 | T3>;
    function cases<T1, T2, T3, T4>(arg1: NotArray<T1>, arg2: NotArray<T2>, arg3: NotArray<T3>, arg4: NotArray<T4>):
        Mocha.ICasesTestWrapper<T1 | T2 | T3 | T4>;
    function cases<T1, T2, T3, T4, T5>(arg1: NotArray<T1>, arg2: NotArray<T2>, arg3: NotArray<T3>, arg4: NotArray<T4>, arg5: NotArray<T5>):
        Mocha.ICasesTestWrapper<T1 | T2 | T3 | T4 | T5>;
    function cases<T1, T2, T3, T4, T5, T6>(arg1: NotArray<T1>, arg2: NotArray<T2>, arg3: NotArray<T3>, arg4: NotArray<T4>,
            arg5: NotArray<T5>, arg6: NotArray<T6>): Mocha.ICasesTestWrapper<T1 | T2 | T3 | T4 | T5 | T6>;
    function cases<T1, T2, T3, T4, T5, T6, T7>(arg1: NotArray<T1>, arg2: NotArray<T2>, arg3: NotArray<T3>, arg4: NotArray<T4>,
            arg5: NotArray<T5>, arg6: NotArray<T6>, arg7: NotArray<T7>): Mocha.ICasesTestWrapper<T1 | T2 | T3 | T4 | T5 | T6 | T7>;
}
