/// <reference types="mocha" />

// merge with existing mocha namespace
declare namespace Mocha {

    interface IAnyParametrizedTestDefinition {
        state: 'failed' | 'passed';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, ...args: Array<any | MochaDone>) => PromiseLike<any> | void): Mocha.ITest;
        only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, ...args: Array<any | MochaDone>) => PromiseLike<any> | void): Mocha.ITest;
        skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, ...args: Array<any | MochaDone>) => PromiseLike<any> | void): void;
    }

    interface IAnyPendingParametrizedTestDefinition {
        state: 'pending';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, ...args: Array<any | MochaDone>) => PromiseLike<any> | void): Mocha.ITest;
    }

    interface IAnyCasesTestWrapper {
        it: IAnyParametrizedTestDefinition;
        xit: IAnyPendingParametrizedTestDefinition;
    }

    /** Interface for Mocha's parametrized test definition. */
    interface IParametrizedTestDefinition<T> {
        state: 'failed' | 'passed';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg: T, done?: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg: T, done?: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
        skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg: T, done?: MochaDone) => PromiseLike<any> | void): void;
    }

    /** Interface for Mocha's pending parametrized test definition. */
    interface IPendingParametrizedTestDefinition<T> {
        state: 'pending';
        (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg: T, done?: MochaDone) => PromiseLike<any> | void): Mocha.ITest;
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

