import { IParametrizedTest } from './iparametrized-test';

export interface IParametrizedTestDefinition<T> {
    state: 'failed' | 'passed';
    (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg: T, done: MochaDone) => PromiseLike<any> | void)
        : IParametrizedTest;
    only(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg: T, done: MochaDone) => PromiseLike<any> | void)
        : IParametrizedTest;
    skip(expectation: string, callback?: (this: Mocha.ITestCallbackContext, arg: T, done: MochaDone) => PromiseLike<any> | void): void;
}
