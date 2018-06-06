
export interface IPendingTestDefinition<T> {
    state: 'pending';
    (expectation: string, assertion?: (this: Mocha.ITestCallbackContext, arg: T, done: MochaDone) => PromiseLike<any> | void)
        : void;
}
