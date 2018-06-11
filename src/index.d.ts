/// <reference types="mocha" />

// merge with existing mocha namespace
declare namespace Mocha {

    /** Interface for Mocha's parametrized test definition. */
    interface IAnyParametrizedTestDefinition {
        state: 'failed' | 'passed';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, ...args: Array<any | MochaDone>) => PromiseLike<any> | void): Mocha.ITest;
        only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, ...args: Array<any | MochaDone>) => PromiseLike<any> | void): Mocha.ITest;
        skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, ...args: Array<any | MochaDone>) => PromiseLike<any> | void): void;
    }

    /** Interface for Mocha's pending parametrized test definition. */
    interface IAnyPendingParametrizedTestDefinition {
        state: 'pending';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, ...args: Array<any | MochaDone>) => PromiseLike<any> | void): Mocha.ITest;
    }

    /** Interface for cases' test wrapper. */
    interface IAnyCasesTestWrapper {
        it: IAnyParametrizedTestDefinition;
        xit: IAnyPendingParametrizedTestDefinition;
    }

    /** Interface for Mocha's parametrized test definition. */
    interface IParametrizedTestDefinition<T> {
        state: 'failed' | 'passed';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg: T, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg: T, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg: T, done: MochaDone) => PromiseLike<any> | void): void;
    }

    /** Interface for Mocha's pending parametrized test definition. */
    interface IPendingParametrizedTestDefinition<T> {
        state: 'pending';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg: T, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper<T> {
        it: IParametrizedTestDefinition<T>;
        xit: IPendingParametrizedTestDefinition<T>;
        using<V>(arg: T | V): IUsingTestWrapper<T | V>;
    }

    /** Interface for cases' test wrapper. */
    interface ICasesTestWrapper<T> {
        it: IParametrizedTestDefinition<T>;
        xit: IPendingParametrizedTestDefinition<T>;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare namespace Mocha {

    /** Interface for Mocha's parametrized test definition. */
    interface IParametrizedTestDefinition2<T1, T2> {
        state: 'failed' | 'passed';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, done: MochaDone) => PromiseLike<any> | void): void;
    }

    /** Interface for Mocha's pending parametrized test definition. */
    interface IPendingParametrizedTestDefinition2<T1, T2> {
        state: 'pending';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper2<T1, T2> {
        it: IParametrizedTestDefinition2<T1, T2>;
        xit: IPendingParametrizedTestDefinition2<T1, T2>;
        using<V1, V2>(arg1: T1 | V1, arg2: T2 | V2): IUsingTestWrapper2<T1 | V1, T2 | V2>;
    }

}

declare namespace Mocha {

    /** Interface for Mocha's parametrized test definition. */
    interface IParametrizedTestDefinition3<T1, T2, T3> {
        state: 'failed' | 'passed';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, done: MochaDone) => PromiseLike<any> | void): void;
    }

    /** Interface for Mocha's pending parametrized test definition. */
    interface IPendingParametrizedTestDefinition3<T1, T2, T3> {
        state: 'pending';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper3<T1, T2, T3> {
        it: IParametrizedTestDefinition3<T1, T2, T3>;
        xit: IPendingParametrizedTestDefinition3<T1, T2, T3>;
        using<V1, V2, V3>(arg1: T1 | V1, arg2: T2 | V2, arg3: T3 | V3): IUsingTestWrapper3<T1 | V1, T2 | V2, T3 | V3>;
    }

}

declare namespace Mocha {

    /** Interface for Mocha's parametrized test definition. */
    interface IParametrizedTestDefinition4<T1, T2, T3, T4> {
        state: 'failed' | 'passed';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, done: MochaDone) => PromiseLike<any> | void): void;
    }

    /** Interface for Mocha's pending parametrized test definition. */
    interface IPendingParametrizedTestDefinition4<T1, T2, T3, T4> {
        state: 'pending';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper4<T1, T2, T3, T4> {
        it: IParametrizedTestDefinition4<T1, T2, T3, T4>;
        xit: IPendingParametrizedTestDefinition4<T1, T2, T3, T4>;
        using<V1, V2, V3, V4>(arg1: T1 | V1, arg2: T2 | V2, arg3: T3 | V3, arg4: T4 | V4): IUsingTestWrapper4<T1 | V1, T2 | V2, T3 | V3, T4 | V4>;
    }

}

declare namespace Mocha {

    /** Interface for Mocha's parametrized test definition. */
    interface IParametrizedTestDefinition5<T1, T2, T3, T4, T5> {
        state: 'failed' | 'passed';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, done: MochaDone) => PromiseLike<any> | void): void;
    }

    /** Interface for Mocha's pending parametrized test definition. */
    interface IPendingParametrizedTestDefinition5<T1, T2, T3, T4, T5> {
        state: 'pending';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper5<T1, T2, T3, T4, T5> {
        it: IParametrizedTestDefinition5<T1, T2, T3, T4, T5>;
        xit: IPendingParametrizedTestDefinition5<T1, T2, T3, T4, T5>;
        using<V1, V2, V3, V4, V5>(arg1: T1 | V1, arg2: T2 | V2, arg3: T3 | V3, arg4: T4 | V4, arg5: T5 | V5): IUsingTestWrapper5<T1 | V1, T2 | V2, T3 | V3, T4 | V4, T5 | V5>;
    }

}

declare namespace Mocha {

    /** Interface for Mocha's parametrized test definition. */
    interface IParametrizedTestDefinition6<T1, T2, T3, T4, T5, T6> {
        state: 'failed' | 'passed';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, done: MochaDone) => PromiseLike<any> | void): void;
    }

    /** Interface for Mocha's pending parametrized test definition. */
    interface IPendingParametrizedTestDefinition6<T1, T2, T3, T4, T5, T6> {
        state: 'pending';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper6<T1, T2, T3, T4, T5, T6> {
        it: IParametrizedTestDefinition6<T1, T2, T3, T4, T5, T6>;
        xit: IPendingParametrizedTestDefinition6<T1, T2, T3, T4, T5, T6>;
        using<V1, V2, V3, V4, V5, V6>(arg1: T1 | V1, arg2: T2 | V2, arg3: T3 | V3, arg4: T4 | V4, arg5: T5 | V5, arg6: T6 | V6): IUsingTestWrapper6<T1 | V1, T2 | V2, T3 | V3, T4 | V4, T5 | V5, T6 | V6>;
    }

}

declare namespace Mocha {

    /** Interface for Mocha's parametrized test definition. */
    interface IParametrizedTestDefinition7<T1, T2, T3, T4, T5, T6, T7> {
        state: 'failed' | 'passed';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, done: MochaDone) => PromiseLike<any> | void): void;
    }

    /** Interface for Mocha's pending parametrized test definition. */
    interface IPendingParametrizedTestDefinition7<T1, T2, T3, T4, T5, T6, T7> {
        state: 'pending';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, done: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper7<T1, T2, T3, T4, T5, T6, T7> {
        it: IParametrizedTestDefinition7<T1, T2, T3, T4, T5, T6, T7>;
        xit: IPendingParametrizedTestDefinition7<T1, T2, T3, T4, T5, T6, T7>;
        using<V1, V2, V3, V4, V5, V6, V7>(arg1: T1 | V1, arg2: T2 | V2, arg3: T3 | V3, arg4: T4 | V4, arg5: T5 | V5, arg6: T6 | V6, arg7: T7 | V7): IUsingTestWrapper7<T1 | V1, T2 | V2, T3 | V3, T4 | V4, T5 | V5, T6 | V6, T7 | V7>;
    }

}
